import Order  from "../model/order.model.js";

export async function deleteOrder(req,res){
    try {
        const oid =req.params.oid
        const tobedeletedOrder =await Order.findByIdAndDelete(oid)
        res.status(200).json({
            message:"sucess data deleted",
        })
        
    } catch (error) {
        res.status(400).json({
       message:"error"
        })
        
    }
}
export  async function getAllOrder(req,res){
        try {

            const AllOrder =  await Order.find()

            res.status(200).json({
                message:"success to get all data ",
                data:AllOrder
            })

            
        } catch (error) {
             res.status(400).json({
            message:"error"
        })
        }
    }

   export  async function getOrderById (req,res){
        try {
            const oid = req.params.oid
            const singleOrder = await Order.findById(oid)
  res.status(200).json({
                message:"success to get  data ",
                data:singleOrder
            })

            
        } catch (error) {
                  res.status(400).json({
            message:"error"
        })
            
        }
    }

