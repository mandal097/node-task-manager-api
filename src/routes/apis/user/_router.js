const router = require("express").Router();
const registerRoute = require("./register");
const loginRoute = require("./login");
const getAllUsers = require("./getAllUsers");
const getUser = require("./getUser");
const auth = require("../../../middleware/auth");

router.use("/register", registerRoute);  //register
router.use("/login", loginRoute);  // login
router.use("/", auth, getUser);  // fetching details  of all particular user by user id
router.use("/get-all-users", auth, getAllUsers);  // list of all users

module.exports = router;