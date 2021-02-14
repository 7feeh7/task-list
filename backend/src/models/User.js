const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    active: {
        type: Boolean,
        default: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);