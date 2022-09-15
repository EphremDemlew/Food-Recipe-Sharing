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
export const signup_query = gql`
  mutation (
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
  ) {
    sign_up(
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
    ) {
      id
      first_name
      last_name
      email
      token
    }
  }
`;

export const imgUploade = gql`
  mutation ($image_url: String!) {
    uploadeImage(image_url: $image_url) {
      id
      image_url
    }
  }
`;
