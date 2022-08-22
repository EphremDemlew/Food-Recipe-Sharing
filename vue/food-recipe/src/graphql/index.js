import gql from "graphql-tag";

export const recipe_query = gql`
  query recipe {
    recipe {
      name
      likes
      images {
        image_url
      }
    }
  }
`;

export const login_query = gql`
  query logins($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;
