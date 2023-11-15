const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const user = require("./routes/userRoute")
const category = require("./routes/categoryRoute")
const item = require("./routes/itemRoute")

app.use("/api/v1", user)
app.use("/api/v1", category)
app.use("/api/v1", item)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app