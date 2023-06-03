const router = require("express").Router();
const createTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const getSingleTask = require('./getSingleTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');


router.use('/create', createTask) //creating new task 
router.use('/get-all-tasks', getAllTasks) //getting all tasks belongs to a particular user
router.use('/get-task', getSingleTask) //getting particular task with its unique id
router.use('/update', updateTask) //update particular task with its unique id
router.use('/delete', deleteTask) //delete particular task with its unique id


module.exports = router;
