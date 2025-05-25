import mongoose, { Schema } from "mongoose";

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

const User = mongoose.model("User",userSchema)

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
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

export default User


