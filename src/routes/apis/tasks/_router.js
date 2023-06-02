const router = require("express").Router();
const auth = require('../../../middleware/auth');
const createTask = require('./createTask');
const getAllTasks = require('./getAllTasks');
const getSingleTask = require('./getSingleTask');
const updateTask = require('./updateTask');
const deleteTask = require('./deleteTask');


router.use('/create', auth, createTask) //creating new task 
router.use('/get-all-tasks', auth, getAllTasks) //getting all tasks belongs to a particular user
router.use('/get-task', auth, getSingleTask) //getting particular task with its unique id
router.use('/update', auth, updateTask) //update particular task with its unique id
router.use('/delete', auth, deleteTask) //delete particular task with its unique id


module.exports = router;
