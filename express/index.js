const express = require("express");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const signup_query = require("./queries/signup_query");
const login_query = require("./queries/login_query");
const admin_login_query = require("./queries/adminLogin");
const soldItems = require("./queries/soldItems");
const shoppingSession = require("./queries/shopingSession");
const paymentDetail = require("./queries/paymentDetails");
const fileUpload_query = require("./queries/fileUploade_query");
const fileUploade = require("./file_uploade/book_file_uploade");
const checkOut = require("./payment/checkout");
const payCheckOut = require("./payment/payCheckOut");
// const soldItemsHelper = require("./")
require("dotenv").config();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server running ... ");
});

// shoping query execute
const shoping_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: shoppingSession,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};
// shoping query execute
const paymentDetail_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: paymentDetail,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};
// soldItems query execute
const soldItems_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: soldItems,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};
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
// login query execute
const admin_login_execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    headers: { "x-hasura-admin-secret": "myadminsecretkey" },
    body: JSON.stringify({
      query: admin_login_query,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

// Sign Up Request Handler
app.post("/signup", async (req, res) => {
  // get request input
  const { email, first_name, last_name, isAuthor, author_id } = req.body.input;

  // run some business logic
  const password = await bcrypt.hash(req.body.input.password, 10);
  // execute the Hasura operation

  const { data, errors } = await signup_execute({
    email,
    first_name,
    last_name,
    password,
    isAuthor,
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
      "x-hasura-allowed-roles": ["user", "anonymous", "author"],
      "x-hasura-user-id": data.insert_users_one.id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  // token claim for users
  const usertokenContents = {
    sub: data.insert_users_one.id,
    name: first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "anonymous", "author"],
      "x-hasura-user-id": data.insert_users_one.id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  // token claim for authors
  const authortokenContents = {
    sub: data.insert_users_one.id,
    name: first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "anonymous", "author"],
      "x-hasura-user-id": data.insert_users_one.id,
      "x-hasura-default-role": "author",
      "x-hasura-role": "author",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(
    data.insert_users_one.isAuthor ? authortokenContents : usertokenContents,
    process.env.HASURA_JWT_SECRET_KEY || "z8pXvFrDjGWb3mRSJBAp9ZljHRnMofLF"
  );
  console.log(data.insert_users_one.isAuthor);
  console.log(token);
  // success

  console.log(data.author_id);
  data.author_id;
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
      "x-hasura-allowed-roles": ["user", "anonymous", "author"],
      "x-hasura-user-id": data.users[0].id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  // token claim for authors
  const authortokenContents = {
    sub: data.users[0].id,
    name: data.users[0].first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user", "anonymous", "author"],
      "x-hasura-user-id": data.users[0].id,
      "x-hasura-default-role": "author",
      "x-hasura-role": "author",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(
    data.users[0].isAuthor ? authortokenContents : usertokenContents,
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

// Login Request Handler
app.post("/adminLogin", async (req, res) => {
  // get request input
  const { email, password } = req.body.input;

  const { data, errors } = await admin_login_execute({ email });
  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0]);
  }
  if (data.users.length === 0) {
    return res.status(400).json({ message: "Incorrect cridentials." });
  }

  const validPassword = await bcrypt.compare(password, data.users[0].password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid Email or Password." });

  // token claim for admin users
  const admintokenContents = {
    sub: data.users[0].id,
    name: data.users[0].first_name,
    iat: Date.now() / 1000,
    iss: "https://myapp.com/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["admin"],
      "x-hasura-user-id": data.users[0].id,
      "x-hasura-default-role": "admin",
      "x-hasura-role": "admin",
    },
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  };

  const token = jwt.sign(
    admintokenContents,
    process.env.HASURA_JWT_SECRET_KEY || "z8pXvFrDjGWb3mRSJBAp9ZljHRnMofLF"
  );

  console.log("......................" + data.users[0]);
  console.log(token);
  console.log("......................");

  // success
  return res.json({
    ...data.users[0],
    token: token,
  });
});

// Checkout request handler
app.post("/order", checkOut);

// Checkout request handler
app.post("/pay/order", payCheckOut);

// Request Handler
app.post("/addBook", fileUploade);

app.get("/api/success", async (req, res) => {
  let config = {
    headers: {
      Authorization: "Bearer " + process.env.CHAPA_SECRET_KEY,
    },
  };
  console.log("sucessfully checked out");
  const tx_ref = req.query.tx_ref;
  const inputs = tx_ref.split("~");
  const book_id = inputs[1];
  const user_id = inputs[2];

  console.log(`the book id ${book_id} , the user id ${user_id}`);
  try {
    let result = await axios.get(
      "https://api.chapa.co/v1/transaction/verify/" + tx_ref,
      config
    );

    console.log("Result: " + result.data);
    console.log(result.data);
    // const status = result.data.status;
    const sales_count = 3;
    const sales = 600;
    const status = result.data.status;
    console.log(result.data.status);

    console.log("it got here ..............");
    // const { data, errors } = await shoping_execute({
    //   // sales_count,
    //   // sales,
    //   book_id,
    //   user_id,
    // });
    // // if Hasura operation errors, then throw error
    // if (errors) {
    //   console.log("The error is");
    //   console.log(errors);
    //   return res.status(400).json(errors[0]);
    // }

    const { data, errors } = await soldItems_execute({
      sales_count,
      sales,
      book_id,
      user_id,
    });
    const order = data.insert_sold_items.returning[0].id;
    // if Hasura operation errors, then throw error
    if (errors) {
      console.log("The error is");
      console.log(errors);
      return res.status(400).json(errors[0]);
    }

    const shopping = async () => {
      const { data, errors } = await shoping_execute({
        book_id,
        user_id,
      });
      // if Hasura operation errors, then throw error
      if (errors) {
        console.log("found the error part");
        return res.status(400).json(errors[0]);
      }
    };

    const paymentdetail = async () => {
      const order_id = order;
      const { data, errors } = await paymentDetail_execute({
        status,
        order_id,
      });
      // if Hasura operation errors, then throw error
      if (errors) {
        console.log("found the error part");
        return res.status(400).json(errors[0]);
      }
    };

    shopping();
    paymentdetail();
    console.log(req.query.tx_ref);
    //TODO: save transaction
    // res.send(" payment transaction result " + JSON.stringify(result.data));
    res.redirect("http://localhost:3000/");
  } catch (error) {
    console.log("something happened " + error);
    res.send(" something happened " + error);
  }
});

app.get("/api/pay/success", async (req, res) => {
  let config = {
    headers: {
      Authorization: "Bearer " + process.env.CHAPA_SECRET_KEY,
    },
  };
  console.log("sucessfully checked out");
  const tx_ref = req.query.tx_ref;
  const inputs = tx_ref.split("~");
  const book_id = inputs[1];
  const user_id = inputs[2];

  console.log(`the book id ${book_id} , the user id ${user_id}`);
  try {
    let result = await axios.get(
      "https://api.chapa.co/v1/transaction/verify/" + tx_ref,
      config
    );

    console.log("Result: " + result.data);
    console.log(result.data);
    // const status = result.data.status;
    const sales_count = 3;
    const sales = 600;
    const status = result.data.status;
    console.log(result.data.status);

    console.log("it got here ..............");
    // const { data, errors } = await shoping_execute({
    //   // sales_count,
    //   // sales,
    //   book_id,
    //   user_id,
    // });
    // // if Hasura operation errors, then throw error
    // if (errors) {
    //   console.log("The error is");
    //   console.log(errors);
    //   return res.status(400).json(errors[0]);
    // }

    const { data, errors } = await soldItems_execute({
      sales_count,
      sales,
      book_id,
      user_id,
    });
    const order = data.insert_sold_items.returning[0].id;
    // if Hasura operation errors, then throw error
    if (errors) {
      console.log("The error is");
      console.log(errors);
      return res.status(400).json(errors[0]);
    }

    const shopping = async () => {
      const { data, errors } = await shoping_execute({
        book_id,
        user_id,
      });
      // if Hasura operation errors, then throw error
      if (errors) {
        console.log("found the error part");
        return res.status(400).json(errors[0]);
      }
    };

    const paymentdetail = async () => {
      const order_id = order;
      const { data, errors } = await paymentDetail_execute({
        status,
        order_id,
      });
      // if Hasura operation errors, then throw error
      if (errors) {
        console.log("found the error part");
        return res.status(400).json(errors[0]);
      }
    };

    shopping();
    paymentdetail();
    console.log(req.query.tx_ref);

    res.send(
      "<h1>You have finished sucessfully with your payment, <br /> you can close this tab now.</h1>"
    );
  } catch (error) {
    console.log("something happened " + error);
    res.send(" something happened " + error);
  }
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
