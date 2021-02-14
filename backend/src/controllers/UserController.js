const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    async create(req, res) {
        let { name, email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ name, email, password: bcrypt.hashSync(password, salt) });
        }

        return res.json({ success: true, data: user });
    },

    async taskByUser(req, res) {
        const { id } = req.params;
        const user = await User.findById(id).populate('tasks');

        return res.json({ success: true, data: user.tasks });
    }
};