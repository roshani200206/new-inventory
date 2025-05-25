import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/category.js"


const app = express()


app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
  
}))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(productRouter,categoryRouter)


export default app