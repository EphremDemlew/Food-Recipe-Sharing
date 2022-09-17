const HASURA_OPERATION = `
mutation uploadeImage($image_url:String!) {
    insert_images_one(object: {image_url: $image_url}) {
      id
      image_url
    }
  }
`;

module.exports = HASURA_OPERATION;

//////////////////////////////// Images /////////////////////////////////////////////////////
const image_Hasura_operation = `
mutation ($image_url: [images_insert_input!]!) {
  insert_images(objects: $image_url) {
    returning {
      id
      image_url
    }
  }
}
`;
module.exports = image_Hasura_operation;

// the variable is like
// {
//   "image_url": [
//    {
//     "image_url": "https://",
//    "recipe_id":  "a2590db0-eae0-4fbc-a454-9b862f031a61"}
//    ]
// }

///////////////////////////////// Recipe ////////////////////////////////////////////////////
const recipe_Hasura_operation = `
mutation($time:numeric!,$title:String!,$user_id:uuid!,$desc:String!) {
  insert_recipe(objects: {time: $time, title: $title, user_id: $user_id, desc: $desc}) {
    affected_rows
  }
}
`;
module.exports = recipe_Hasura_operation;

// the variable is like
// {
//   "time": 200,
//   "title": "Dero Wot",
//   "user_id": "dd822415-a2d6-49c5-9c98-0571faeb6f88",
//   "desc": "Ethiopian wote"
// }
///////////////////////////////// Steps ////////////////////////////////////////////////////
const steps_Hasura_operation = `
mutation ($steps: [steps_insert_input!]! ) {
  insert_steps(objects: $steps ) {
    affected_rows
  }
}
`;
module.exports = steps_Hasura_operation;

// the variable is like
// {
//   "steps": [
//     {
//       "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61",
//        "steps": "Cook Steps"
//     }
//   ]
// }

////////////////////////////////// Rating ///////////////////////////////////////////////////
const rating_Hasura_operation = `
mutation($rating:Int! ,$user_id:uuid!, $recipe_id:uuid! ,  ) {
  insert_rating(objects: {rating: $rating, user_id: $user_id, recipe_id: $recipe_id}) {
    affected_rows
  }
}
`;
module.exports = rating_Hasura_operation;

// the variable is like
// {
//   "rating": 0,
//   "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61",
//   "user_id": "dd822415-a2d6-49c5-9c98-0571faeb6f88"

// }

////////////////////////////////// Likes ///////////////////////////////////////////////////

const like_Hasura_operation = `
mutation($like:Int! , $recipe_id:uuid! ,  ) {
  insert_likes(objects: {like: $like,  recipe_id: $recipe_id}) {
    affected_rows
  }
}
`;
module.exports = like_Hasura_operation;

// the variable is like
// {
//   "like": 0,
//   "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61"
// }

////////////////////////////////// Favorite ///////////////////////////////////////////////////

const favorite_Hasura_operation = `
mutation($user_id:uuid!, $recipe_id:uuid! ,  ) {
  insert_favorite(objects: {user_id: $user_id, recipe_id: $recipe_id}) {
    affected_rows
  }
}
`;
module.exports = favorite_Hasura_operation;

// the variable is like
// {
// 	"user_id": "dd822415-a2d6-49c5-9c98-0571faeb6f88",
//   "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61"
// }

////////////////////////////////// Comment ///////////////////////////////////////////////////

const comment_Hasura_operation = `
mutation($comment:String! , $recipe_id:uuid! ,  ) {
  insert_comment(objects: {comment: $comment,  recipe_id: $recipe_id}) {
    affected_rows
  }
}
`;
module.exports = comment_Hasura_operation;

// the variable is like
// {
//   "comment": "What a good recipe",
// 	"user_id": "dd822415-a2d6-49c5-9c98-0571faeb6f88",
//   "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61"
// }

//////////////////////////////// Ingredients /////////////////////////////////////////////////////
const Ingredients_Hasura_operation = `
mutation ($ingridents: [Ingredients_insert_input!]!) {
  insert_Ingredients(objects: $ingridents) {
    returning {
      id
      ingridents
    }
  }
}
`;
module.exports = Ingredients_Hasura_operation;

// the variable is like
// {
//   "ingridents": [
//     {
//       "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61",
//        "ingridents": "Cook Steps"
//     }
//   ]
// }

////////////////////////////////// Category ///////////////////////////////////////////////////

const category_Hasura_operation = `
mutation ($category: [category_insert_input!]!) {
  insert_category(objects: $category) {
    affected_rows
  }
}

`;
module.exports = comment_Hasura_operation;

// the variable is like
// {
//   "category": [
//     {
//       "recipe_id": "a2590db0-eae0-4fbc-a454-9b862f031a61",
//        "category": "Main Course"
//     }
//   ]
// }
