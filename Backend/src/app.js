import express from "express"
import cors from "cors"
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/category.js"


const app = express()


app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
  
}))

app.use(productRouter,categoryRouter)


export default app