const Task = require("../../../models/Task");

const router = require("express").Router();



//getting all tasks belongs to a particular user  @http://localhost:5000/api/v1/Task/get-all-tasks
router.get('/', async (req, res) => {
    const userId = req.payload.id; //id of loged in user from middleware
    try {

        const tasks = await Task.find({ userId })
            .populate('userId', '-password')
            .sort({ createdAt: -1 })

        return res.json({
            status: 'success',
            message: 'Tasks fetched successfully',
            data: tasks
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