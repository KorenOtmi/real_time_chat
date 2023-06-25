const usersModel = require("../models/usersModel");

exports.GetUsers = async (req, res) => {
    try {
        const users = await usersModel.find({});
        console.log(users);
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database Error!' });
    }
};