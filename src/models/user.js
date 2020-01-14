//email, name, graduated, require name and email, give graduated a default value

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required: true
  },
  Email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  Password: {
    type: String,
    required: true,
    trim: true,
    minlength:6,
    validate(value){
      if (value.toLowerCase().includes("password")){
        throw new Error('Password cannot contain "password');
      }
    }
  },
  Graduated: {
    type: Boolean,
    default: false
  }
});

userSchema.pre("save", async function(next){
  const user = this;
  if (user.isModified("password")){
    user.Password = await bcrypt.hash(user.Password, 7);
  }
  next();
});
//when we send a pst or patch request, then bcrypt will run BEFORE the user password is saved to the mongo object.
const User = mongoose.model("user", userSchema);

module.exports = User;