const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/BackendDB");

connect.then(() => {
    console.log("Database is successfully connected.")
}).catch(()=> {
    console.log("Database connection failed.")
});

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;