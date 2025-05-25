import Category from "../model/category.model.js";

export async function createCategory(req,res){
    try {

        const {name}=req.body

        if(!name){
             res.status(400).json({
            message:"name is not passed"
        })
        }

        const newcategory = await Category.create({
            name:name
        })
        if(!newcategory){
              res.status(400).json({
            message:"category not created"
        })
        }

        res.status(200).json({
            message:"created successfully",
            data:newcategory
        })
        
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
    }
}
/*
import Category from "../model/category.model.js";
async function createCategory(req,res) {
    try {
        const{name}=req.body
        if(!name){
            res.status(400).json({
            message:"name is not passed"
     }) 
        }
        const newcategory = await Category.create({
            name:name 
        })
        if(!newcategory){
            res.status(400).json({
            message:"category not created"
            })
        }
         res.status(200).json({
            message:"Created sucessfully",
            data:newcategory
         })
        
    } catch (error) {
        res.status(400).json({
            message:"error"
     })
        
    }
    
}

*/


export async function updateCategory (req,res){
 try {
       const {name}=req.body
       const cid = req.params.cid
   
       if(!name){
          return res.status(400).json({
               message:"name is required"
           })
       }
   
       const tobeUpdateCategory = await Category.findByIdAndUpdate(cid,{
           name:name
       },{
        new:true
       }
    )
   
       if(!tobeUpdateCategory){
         return  res.status(400).json({
               message:"failed to update"
           })
       }
   
       res.status(200).json({
           message:"success ",
           data:tobeUpdateCategory
       })
   
   } catch (error) {
    res.status(400).json({
        message:"error"
    })
 }
 }
 export async function deleteCategory(req,res) {
    try {
       
        const cid =req.params.cid
      
        const tobedeletedCategory = await Category.findByIdAndDelete(cid)
          res.status(200).json({
           message:"success data deleted ",
          
       })
    } catch (error) {
        res.status(400).json({
            message:"error"
        })
        
    }
    }
    
 
 
   export  async function getAllCategory(req,res){
        try {

            const allCategory =  await Category.find()

            res.status(200).json({
                message:"success to get all data ",
                data:allCategory
            })

            
        } catch (error) {
             res.status(400).json({
            message:"error"
        })
        }
    }

   export  async function getCategoryById (req,res){
        try {
            const cid = req.params.cid
            const singleCategory = await Category.findById(cid)
  res.status(200).json({
                message:"success to get  data ",
                data:singleCategory
            })

            
        } catch (error) {
                  res.status(400).json({
            message:"error"
        })
            
        }
    }
