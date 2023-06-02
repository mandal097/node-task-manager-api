const Task = require("../../../models/Task");

const router = require("express").Router();



//create Task  @http://localhost:5000/api/v1/Task/create
router.post('/', async (req, res) => {
    const userId = req.payload.id; //id of loged in user from middleware
    const { topic, desc } = req.body;
    if (!topic || !desc) {
        return res.json({
            status: 'err',
            message: 'All fields are required'
        })
    }
    try {
        const newTask = new Task({
            topic,
            desc,
            userId
        })
        const savedTask = await newTask.save();
        return res.json({
            status: 'success',
            message: 'Task created successfully',
            data: savedTask
        })

    } catch (error) {
        return res.status(500).json({
            status: 'err',
            message: 'Something went wrong',
            error: error
        })
    }
})

module.exports = router;