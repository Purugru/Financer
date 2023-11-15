const router = require("express").Router();
const { createItem, updateItem, deleteItem } = require("../controllers/itemController");
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/additem").post(isAuthenticatedUser, createItem);
router.route("/updateitem/:categoryId/:itemId").patch(isAuthenticatedUser, updateItem);
router.route("/deleteitem/:categoryId/:itemId").delete(isAuthenticatedUser, deleteItem);

module.exports = router;
