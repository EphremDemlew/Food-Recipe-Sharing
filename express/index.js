const express = require("express");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const signup_query = require("./queries/signup_query");
const login_query = require("./queries/login_query");
const { image_Hasura_operation } = require("./queries/fileUploade_query");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;

    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb({ errors: "Error: Images Only!" });
    }
  },
});

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server running ... ");
});

// signup query execute
const signup_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: signup_query,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

// login query execute
const login_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: login_query,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};
// imageUploade query execute
const uploade_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: image_Hasura_operation,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("File DEBUG: ", data);
  return data;
};

// Sign Up Request Handler
app.post("/signup", async (req, res) => {
  // get request input
  const { email, first_name, last_name } = req.body.input;

  // run some business logic
  const password = await bcrypt.hash(req.body.input.password, 10);
  // execute the Hasura operation

  const { data, errors } = await signup_execute({
    email,
    first_name,
    last_name,
    password,
  });
  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }

  const tokenContents = {
    sub: data.insert_users_one.id,
    name: first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "anonymous", "admin"],
      "x-hasura-user-id": data.insert_users_one.id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(
    tokenContents,
    process.env.HASURA_JWT_SECRET_KEY || "z8pXvFrDjGWb3mRSJBAp9ZljHRnMofLF"
  );
  console.log(token);
  // success

  return res.json({
    ...data.insert_users_one,
    token: token,
  });
});

// Login Request Handler
app.post("/Login", async (req, res) => {
  // get request input
  const { email, password } = req.body.input;

  const { data, errors } = await login_execute({ email });
  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }
  if (data.users.length === 0) {
    return res
      .status(400)
      .json({ message: "Account not found, Please Sign Up." });
  }
  const validPassword = await bcrypt.compare(password, data.users[0].password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid Email or Password." });
  console.log("The password is " + validPassword);

  // token claim for users
  const usertokenContents = {
    sub: data.users[0].id,
    name: data.users[0].first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "anonymous", "admin"],
      "x-hasura-user-id": data.users[0].id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(
    usertokenContents,
    process.env.HASURA_JWT_SECRET_KEY || "z8pXvFrDjGWb3mRSJBAp9ZljHRnMofLF"
  );

  console.log("......................");
  console.log(token);
  console.log("......................");

  // success
  return res.json({
    ...data.users[0],
    token: token,
  });
});

app.post("/uploadeImage", upload.single("file"), async (req, res) => {
  console.log("From Server");

  try {
    await sharp(req.file.path).toFile(
      `./public/images/${req.file.originalname}`
    );
    fs.unlink(req.file.path, () => {
      res.json({ file: `/images/${req.file.originalname}` });
    });
  } catch (error) {
    res.status(422).json({ error });
  }
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
