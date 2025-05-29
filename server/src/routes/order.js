import { Router } from "express"; 


import {createOrder, deleteOrder,getAllOrder,getOrderById,updateOrder
} from "../controller/order.js"


const router =Router()

router.post("/api/order/create",createOrder)
router.delete("/api/order/delete/:oid",deleteOrder)
router.put("/api/order/update/:oid",updateOrder)
router.get("/api/order",getAllOrder)
router.get("/api/order/:oid",getOrderById)

export default router