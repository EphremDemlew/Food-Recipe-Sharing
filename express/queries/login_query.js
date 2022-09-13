// Login Query
const LOGIN_HASURA_OPERATION = `
query login($email: String!){
  users(where: {email: {_eq: $email}}){
		id
    email
    password
    first_name
    last_name
    created_at
  }
}
`;
module.exports = LOGIN_HASURA_OPERATION;
