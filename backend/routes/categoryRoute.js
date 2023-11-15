const router = require("express").Router()
const { createCategory, updateCategory, deleteCategory, getCategoryData } = require("../controllers/categoryController")
const { isAuthenticatedUser } = require("../middleware/auth")

router.route("/getdata").get(isAuthenticatedUser, getCategoryData)
router.route("/addcategory").post(isAuthenticatedUser, createCategory)
router.route("/updatecategory/:id").patch(isAuthenticatedUser, updateCategory)
router.route("/deleteCategory/:id").delete(isAuthenticatedUser, deleteCategory)

module.exports = router