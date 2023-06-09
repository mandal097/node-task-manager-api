const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    topic: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false  //true for complete and false for incomplete tasks
    }
},
    { timestamps: true }
);


const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;