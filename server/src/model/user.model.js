import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
     email:{
         type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     }
})

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    "fajsifnajnfalmnfjdsnfd",
    { expiresIn: "1d" }
  );
};
const User = mongoose.model("User",userSchema)



export default User


