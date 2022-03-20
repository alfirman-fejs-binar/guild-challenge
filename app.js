const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const bookApp = require("./routes/book");

// const dashboard = require("./routes/dashboard.route.js");
// const authentication = require("./routes/authentication.route.js");

app.set("view engine", "ejs");

app.use("/", bookApp);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
