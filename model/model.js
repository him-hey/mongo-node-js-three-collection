const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street:{
        type: String,
    },
    city:{
        type: String,
    }
})

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }
})

const roleModel = mongoose.model("roles", roleSchema);
const addressModel = mongoose.model("addresses", addressSchema);
const userModel = mongoose.model("users", userSchema);

module.exports.roleModel = roleModel;
module.exports.userModel = userModel;
module.exports.addressModel = addressModel;