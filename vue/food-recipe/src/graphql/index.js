import gql from "graphql-tag";

export const recipe_query = gql`
  query recipes {
    recipe {
      id
      name
      likes
      images {
        image_url
      }
    }
  }
`;

export const login_query = gql`
  mutation logins($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
      first_name
      created_at
    }
  }
`;
