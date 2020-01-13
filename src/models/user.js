//email, name, graduated, require name and email, give graduated a default value

const mongoose = require("mongoose");
const User = mongoose.model("user", {
  Email: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Graduated: {
    type: Boolean,
    default: false
  }
});

module.exports = User;