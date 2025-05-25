import { Router } from "express"


import {
    dashboardData
    
 } from "../controller/dashboard.controller.js"


const router = Router()


 

// write here 
router.get("/api/dashboard", dashboardData)


export default router

