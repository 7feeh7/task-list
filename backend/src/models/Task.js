const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    done: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);