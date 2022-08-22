module.exports = {
  client: {
    service: {
      name: "food-recipe",
      // URL to the GraphQL API
      url: "http://localhost:8080/v1/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
