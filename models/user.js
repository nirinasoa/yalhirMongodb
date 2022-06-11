const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: String,
  },
},{ timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;