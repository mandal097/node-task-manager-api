const Task = require("../../../models/Task");

const router = require("express").Router();



//getting particular task @http://localhost:5000/api/v1/Task/get-task/:taskId
router.get('/:taskId', async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.taskId })

        return res.json({
            status: 'success',
            message: 'Tasks fetched successfully',
            data: task
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