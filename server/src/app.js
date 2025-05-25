import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/category.js"
import orderRouter from "./routes/order.js"
import userRouter from "./routes/user.js"
import dashboardRouter from "./routes/dashboard.js"



const app = express()


app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
credentials:true
  
}))


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(userRouter,productRouter,categoryRouter,orderRouter,dashboardRouter)


export default app