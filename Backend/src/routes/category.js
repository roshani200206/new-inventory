import { Router } from "express"


import {createCategory,updateCategory,deleteCategory,getAllCategory,getCategoryById
    
 } from "../controller/category.js"


const router = Router()

// router.post("/api/category/create", createCategory,)
// router.put("/api/category/update/:cid", updateCategory,)
// router.delete("/api/category/delete/:cid", deleteCategory,)
// router.get("/api/categories",getAllCategory)
// router.get("/api/category/:cid",getCategoryById)
 

// write here 
router.post("/api/category/create", createCategory,)
router.put("/api/category/update/:cid", updateCategory,)
router.delete("/api/category/delete/:cid", deleteCategory,)
router.get("/api/categories",getallCategory)
router.get("/api/category/:cid",getCategoryById)

export default router

