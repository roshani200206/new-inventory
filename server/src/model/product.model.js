import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      price:{
        type:Number,
        required:true
    },
      stock:{
        type:Number,
        required:true
    },
     category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    }
})

const Product = mongoose.model("Product",productSchema)

export default Product


