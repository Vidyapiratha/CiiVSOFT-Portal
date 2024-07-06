let response;
// const db = require("./db");
const { pgDbPromise } = require("./connection");
require("dotenv").config();

exports.lambdaHandler = async (event, context) => {
  const EMPLOYEES = [
    {
      name: "bob",
      empolyee_id: 121,
    },
  ];

  try {
    // Log to view full Http request in Cloudwatch
    console.log(event);

    let result = "";

    if (event.httpMethod === "GET" && event.resource === "/users") {
      result = JSON.stringify(EMPLOYEES);
    } else if (event.httpMethod === "POST" && event.resource === "/users") {
      try {
        const db = await pgDbPromise();
      } catch (err) {
        console.log("err", err);
      }
      const { id, username, lastName, password } = event.body;
      console.log("AFTER BODY PARSING");
      try {
        const db = await pgDbPromise();
        const result = await db.query(
          "INSERT INTO users(id, first_name, last_name, password) VALUES($1, $2, $3, $4) RETURNING *",
          [id, username, lastName, password]
        );
        // res.status(201).send(result.rows[0]);
        console.log("AFTER RESULTS");
        result = JSON.stringify(result.rows[0]);
      } catch (err) {
        res.status(500).send(err.message);
      }
      // EMPLOYEES.push(JSON.parse(event.body));
    }

    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: result,
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
