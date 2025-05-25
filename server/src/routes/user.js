import { Router } from "express";
import {getMe, login, logout, signup} from "../controller/user.js"
import { verifyJWT } from "../middleware/auth.js";

const router = Router()

router.post("/api/user/signup",signup,)
router.post("/api/user/login",login,)
router.get("/api/user/me",verifyJWT,getMe)



router.get("/api/user/logout",verifyJWT,logout)


export default router