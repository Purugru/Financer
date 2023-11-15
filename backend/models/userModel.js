const mongoose = require("mongoose")
const validator = require('validator')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: {
        type: String,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    emailVerified: Boolean,
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {  

    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10) 
})

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, "Hello123", {
        expiresIn: "5d"
    })
}

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(20).toString("hex")
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000
    return resetToken
}
module.exports = mongoose.model("User", userSchema)
