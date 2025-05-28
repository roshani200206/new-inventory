import Order  from "../model/order.model.js";
import Product from "../model/product.model.js";






export async function createOrder (req, res) {
  try {
    const {
      total,
      customer,
      payment_type,
      status,
      is_paid,
      products,
    } = req.body;

    console.log(req.body)

  
    if (
      !total ||
   
      !payment_type ||
      !status ||
      typeof is_paid === 'undefined' ||
      !Array.isArray(products) ||
      products.length === 0
    ) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    
    for (const item of products) {
      
      const productExists = await Product.findById(item.product);
      if (!productExists) {
        return res.status(404).json({ message: `Product not found: ${item.product}` });
      }
      if(productExists.stock < item.quantity){
         return res.status(404).json({ message: `Product stock low : ${item.product}` });
      }
      productExists.stock = productExists.stock - item.quantity
      await productExists.save()
    }

  

    const neworder = await Order.create({
      total,
      customer:"68334a78b5c5b80889fa89ad",
      payment_type,
      status,
      is_paid,
      products,
    });

    

    res.status(201).json({ message: 'Order created successfully.', data: neworder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};



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
            const singleOrder = await Order.findById(oid).populate('products.product', 'name price');
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

