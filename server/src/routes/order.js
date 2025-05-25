import { Router } from "express"; 


import {createOrder, deleteOrder,getAllOrder,getOrderById
} from "../controller/order.js"
import { verifyJWT } from "../middleware/auth.js";


const router =Router()

router.post("/api/order/create",createOrder)
router.delete("/api/order/delete/:oid",deleteOrder)
router.get("/api/order",getAllOrder)
router.get("/api/order/:oid",getOrderById)

export default router