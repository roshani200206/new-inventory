import mongoose from "mongoose"
import app from "./app.js"


async function connectdb(){
const conn =await mongoose.connect("mongodb+srv://cpurnima233:cpurnima233@cluster0.xihcb2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
if(conn){
  console.log("connected to mongo db")
   app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
}
   
}
connectdb()
