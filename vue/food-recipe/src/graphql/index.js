import gql from "graphql-tag";

export const full_recipe_query = gql`
  query recipes {
    recipe {
      id
      title
      description
      time
      user_id
      images {
        image_url
      }
      steps {
        steps
      }
      Ingredients {
        ingridents
      }
      categories {
        category
      }
      comments {
        comment
      }
      likes {
        like
      }
      likes_aggregate {
        aggregate {
          count(columns: like)
        }
      }
      comments_aggregate {
        aggregate {
          count(columns: comment)
        }
      }
      ratings {
        rating
      }
      ratings_aggregate {
        aggregate {
          avg {
            rating
          }
        }
      }
    }
  }
`;

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
export const add_favorite_recipe = gql`
  mutation ($recipe_id: uuid!) {
    insert_favorite(objects: { recipe_id: $recipe_id }) {
      affected_rows
    }
  }
`;
export const remove_favorite_recipe = gql`
  mutation deleteFavorite($recipe_id: uuid!) {
    delete_favorite(where: { recipe_id: { _eq: $recipe_id } }) {
      affected_rows
    }
  }
`;
export const favorite_recipe_query = gql`
  query {
    favorite {
      recipe {
        id
        title
        description
        time
        user_id
        user {
          email
        }
        images {
          image_url
        }
        steps {
          steps
        }
        Ingredients {
          ingridents
        }
        categories {
          category
        }
        comments {
          comment
        }
        likes {
          like
        }
        likes_aggregate {
          aggregate {
            count(columns: like)
          }
        }
        comments_aggregate {
          aggregate {
            count(columns: comment)
          }
        }
        ratings {
          rating
        }
        ratings_aggregate {
          aggregate {
            avg {
              rating
            }
          }
        }
      }
    }
  }
`;

export const add_likes_query = gql`
  mutation ($recipe_id: uuid!) {
    insert_likes(objects: { recipe_id: $recipe_id, like: 1 }) {
      affected_rows
    }
  }
`;
export const remove_likes_query = gql`
  mutation ($recipe_id: uuid!) {
    delete_likes(where: { recipe_id: { _eq: $recipe_id } }) {
      affected_rows
    }
  }
`;

export const login_query = gql`
  mutation logins($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
      first_name
      last_name
      email
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
export const search_recipe = gql`
  query searchRecipes($search: String!) {
    search_recipes(args: { search: $search }) {
      id
      title
      description
      time
      user_id
      images {
        image_url
      }
      steps {
        steps
      }
      Ingredients {
        ingridents
      }
      categories {
        category
      }
      comments {
        comment
      }
      likes {
        like
      }
      likes_aggregate {
        aggregate {
          count(columns: like)
        }
      }
      comments_aggregate {
        aggregate {
          count(columns: comment)
        }
      }
      ratings {
        rating
      }
      ratings_aggregate {
        aggregate {
          avg {
            rating
          }
        }
      }
    }
  }
`;

export const recipeUploade = gql`
  mutation ($title: String!, $time: numeric!, $description: String!) {
    insert_recipe_one(
      object: { description: $description, time: $time, title: $title }
    ) {
      id
    }
  }
`;
