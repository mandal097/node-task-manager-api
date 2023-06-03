const router = require("express").Router();
const testRoute = require("./test");
const taskRoutes = require("./apis/tasks/_router");

router.use('/', testRoute);  //test route
router.use('/task', taskRoutes); // users routes

module.exports = router;