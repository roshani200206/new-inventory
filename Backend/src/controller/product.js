import Product from "../model/product.model.js";
export async function createProduct(req,res){
    try {
        const {name,price,stock,category} = req.body
        if(!name||!price||!stock){
            res.status(400).json({
                message:"name,price or stock is not passed"
            })
        }
        const newproduct = await Product.create({
            name:name,
            price:price,
            stock:stock,
            category:category
        })
         if(!newproduct){
            res.status(400).json({
                message:"product is not created"
            })
        }
        res.status(200).json({
            message:"created successfully",
        })
 
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
        
    }
}
export async function updateProduct(req,res){
    try {
        const {name,price,stock,category} =req.body
        const pid =req.params

        if(!name ||!price ||!stock){
            res.status(400).json({
                message:"name,price or stock is required"
            })
        }

            const tobeUpdateProduct = await Product.findByIdAndUpdate(pid,{
            name:name,
            price:price,
            stock:stock,
            category:category,
        })



         if(!tobeUpdateProduct){
            res.status(400).json({
                message:"failed to update"
            })
        }
        res.status(200).json({
            message:"sucess",
            data:tobeUpdateProduct
        })
 
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
        
    }
}
export async function deleteProduct(req,res) {
    try{
        const pid = req.params
        const tobedeletedProduct = await Product.findByIdAndDelete(pid)
         res.status(400).json({
            message:"sucess data deleted",
        })
    }catch(error){
        res.status(400).json({
            message:"error"
        })
    }
    
}
export async function getallProduct(){
    try {
        const allProduct = await Product.find()
        res.status(200).json({
            message:"success to get all data",
            data:allProduct
        })
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
        
    }
}
async function getProductByID(){
    try {
        const pid =req.params
        const singleProduct= await Product.findById(pid)
        res.status(200).json({
            message:"success to get all data",
            data:singleProduct
        })
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
        
    }
}
    
