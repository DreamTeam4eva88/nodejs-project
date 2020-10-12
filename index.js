// index.js

/**
 * Required External Modules
 */

var express = require("express");
var path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

/**
 *  * Routes Definitions
 */

app.get("/", (req, res) => {
    res.status(200).send("Kingdom Cre8tive: Locked In");
});
/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to request on http://localhost:${port}`);
});
