const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to uncaught exception")
    process.exit(1);
})

dotenv.config({path: "../backend/config/config.env"})
connectDatabase()

const server = app.listen(3000, () => {
    console.log(`Server is listening on http://localhost:3000`)
})

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to unhandled Promise Rejection")

    server.close(() => {
        process.exit(1)
    })
})