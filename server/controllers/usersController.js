const con = require('../DB/db');

exports.GetUsers = async (req, res) => {
    await con.execute("SELECT * FROM users", (err, result) => {
        if (err) return err
        res.send(result)
    });
};