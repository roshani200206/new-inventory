// total 
// customer  => user ko ref
// payment_type
// status 
//is_paid
// products => ref of Product model = > quantity ne hunxa
import mongoose, { Schema } from "mongoose";


const orderSchema = new mongoose.Schema({
    total:{
        type:String,
        required:true
    },
     customer:{
        type:Schema.Types.ObjectId,
        ref:"User"
     },
     payment_type:{
        type:String,
        enum:["CASH","CARD"],
        required:true
     },
     status:{
        type:String, 
         enum:["PENDING","CONFIRMED","CANCELLED"],
        required:true
     },
     is_paid:{
        type:Boolean,
        required:true
     },
     products:[
    {  product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
     },
     quantity:{
      type:Number,
      default:1
     }
   }
   ]

})
const order = mongoose.model("order",orderSchema)

    export default order

