const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String
});

const User = mongoose.model("user", userSchema);
const newUser = new User({
    name: "Chinnu ",
    age: 17,
    address: "TSGENCO, KTPP"
});

module.exports = User;