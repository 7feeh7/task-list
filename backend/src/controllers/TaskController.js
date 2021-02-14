const Task = require('../models/Task');
const User = require('../models/User');

module.exports = {
    async create(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        
        const task = await Task.create({ name, user: id });
        
        await task.save();

        const userById = await User.findById(id);

        userById.tasks.push(task);
        await userById.save();

        return res.json({ success: true, data: userById });
    },

    async index(req, res) {
        const { id } = req.params;
        let tasks = await User.findById(id).populate('tasks');
        return res.json({data: tasks.tasks});
    }
}