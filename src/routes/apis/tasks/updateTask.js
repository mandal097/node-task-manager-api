const Task = require("../../../models/Task");

const router = require("express").Router();



//update any particular task @http://localhost:5000/api/v1/Task/update/:taskId
router.put('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
        return res.json({
            status: 'success',
            message: 'Task not found',
        })
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, {
            $set: req.body
        },
            { new: true }
        )
        return res.json({
            status: 'success',
            message: 'Task updated successfully',
            data: updatedTask
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