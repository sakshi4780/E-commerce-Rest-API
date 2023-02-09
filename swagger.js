// this is an extra file
// still needs to be completed it is not related to api just an file to make documentation


const swaggerJsdoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hello World",
      version: "1.0.0",
    },
  },
  apis: ["server.js"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
