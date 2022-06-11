const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  
},{ timestamps: true });

const About = mongoose.model("About", AboutSchema);

module.exports = About;