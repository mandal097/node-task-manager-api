const Task = require("../../../models/Task");

const router = require("express").Router();



//update any particular task @http://localhost:5000/api/v1/Task/delete/:taskId
router.delete('/:taskId', async (req, res) => {
    const { taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
        return res.json({
            status: 'success',
            message: 'Task not found/maybe deleted',
        })
    }

    try {
        await Task.findByIdAndDelete(taskId);
        return res.json({
            status: 'success',
            message: 'Task deleted successfully'
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