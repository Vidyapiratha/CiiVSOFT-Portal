const awsServerlessExpress = require("aws-serverless-express");
// const app = require("./app"); // Path to your Express app
// const test = require("./test");
const addClient = require("./addClientAPI");

const server = awsServerlessExpress.createServer(addClient);

exports.lambdaHandler = (event, context) => {
  console.log(event, "event");
  console.log("THE lMBDA WORKS");
  awsServerlessExpress.proxy(server, event, context);
};
