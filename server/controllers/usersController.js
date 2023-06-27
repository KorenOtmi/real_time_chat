const con = require('../DB/db');
const bcrypt = require('bcryptjs');

// exports.GetUsers = async (req, res) => {
//     await con.execute("SELECT * FROM users", (err, result) => {
//         if (err) return err
//         res.send(result)
//     });
// };

exports.getUsersById = async (req, res) => {

}


exports.Register = async (req, res) => {
    const { fullName, username, password} = req.body;
    const image = req.file.filename;

    con.execute("SELECT username FROM users WHERE username=?", [username], async (err, result) => {
        if (err) return res.json(err)
        if (result.length > 0)
            return res.send({ message: "User already exists !" });

        let hashedPassword = await bcrypt.hash(password, 8);

        con.execute("INSERT INTO users (fullName, username, password, image) VALUES (?,?,?,?)", [fullName, username, hashedPassword, image], (err, result) => {
            if (err) return res.json(err);
            return res.status(200).send(result);
        })
    })
};

exports.Login = async (req, res) => {
    const { username, password } = req.body;

    con.execute("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    res.send(result);
                }
                else {
                    res.send({ message: "Wrong username/password combination !" });
                }
            })
        }
        else {
            res.send({ message: "User doen't exist" });
        }
    });
};


exports.Logout = async (req, res) => {
    await con.execute("SELECT * FROM users", (err, result) => {
        if (err) return err
        res.send(result)
    });
};