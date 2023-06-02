const router = require("express").Router();
const testRoute = require("./test");
const userRoutes = require("./apis/user/_router");
const taskRoutes = require("./apis/tasks/_router");

router.use('/', testRoute);  //test route
router.use('/user', userRoutes); // users routes
router.use('/task', taskRoutes); // users routes

module.exports = router;