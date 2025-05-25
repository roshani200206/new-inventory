import { Router } from "express"; 


import {createProduct,updateProduct,deleteProduct,getallProduct,getProductByID
} from "../controller/product.js"


const router =Router()

router.post("/api/product/create",createProduct,)
router.put("/api/product/update/:pid",updateProduct)
router.delete("/api/product/delete/:pid",deleteProduct)
router.get("/api/product",getallProduct)
router.get("/api/product/:pid",getProductByID)

export default router