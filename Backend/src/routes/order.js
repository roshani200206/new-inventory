import { Router } from "express"; 


import {deleteOrder,getAllOrder,getOrderById
} from "../controller/order.js"


const router =Router()

router.delete("/api/order/delete/:oid",deleteOrder)
router.get("/api/order",getAllOrder)
router.get("/api/order/:oid",getOrderById)

export default router