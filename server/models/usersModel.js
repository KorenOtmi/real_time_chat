const mongoose = require("mongoose");

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true })

// export default mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);