// total 
// customer  => user ko ref
// payment_type
// status 
//is_paid
// products => ref of Product model = > quantity ne hunxa
import mongoose, { Schema } from "mongoose";
import Product from "./product.model";

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
        required:true
     },
     status:{
        type:String, 
        required:true
     },
     is_paid:{
        type:String,
        required:true
     },
     Product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
     }

})
const order = mongoose.model("order",orderSchema)

    export default order

