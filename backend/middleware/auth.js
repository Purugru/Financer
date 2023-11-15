const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

    const decodedData = jwt.verify(token, "Hello123")

    req.user = await User.findById(decodedData.id)
    next()
})

module.exports = {
    isAuthenticatedUser
}