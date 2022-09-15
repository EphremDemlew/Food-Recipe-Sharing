const HASURA_OPERATION = `
mutation uploadeImage($image_url:String!) {
    insert_images_one(object: {image_url: $image_url}) {
      id
      image_url
    }
  }
`;

module.exports = HASURA_OPERATION;
