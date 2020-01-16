//email, name, graduated, require name and email, give graduated a default value

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
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
    minlength: 6,
    validate(value){
      if (value.toLowerCase().includes("password")){
        throw new Error('Password cannot contain "password');
      }
    }
  },
  Graduated: {
    type: Boolean,
    default: false
  },
  tokens: [
    {
      token: {
        type:String,
        required: true
      }
    }
  ]
});

userSchema.methods.generateToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString()}, "sabdelfatah");
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
};

userSchema.pre("save", async function(next){
  const user = this;
  if (user.isModified("Password")){
    user.Password = await bcrypt.hash(user.Password, 7);
  }
  next();
});
//when we send a pst or patch request, then bcrypt will run BEFORE the user password is saved to the mongo object.

userSchema.statics.findByCredentials = async (Email, Password) =>{
  const user = await User.findOne({ Email });
  if(!user){
    throw new Error("unable to login");
  }
  const isMatch = await bcrypt.compare(Password, user.Password);
  if(!isMatch){
    throw new Error("incorrect password");
  }
  return user;
}
const User = mongoose.model("user", userSchema);

module.exports = User;