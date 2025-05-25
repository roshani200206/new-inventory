import Category from "../model/category.model.js";
import Order from "../model/order.model.js";
import Product from "../model/product.model.js";

export async function dashboardData(req,res) {
  const product = await Product.countDocuments();
  const categories = await Category.countDocuments();
  const orders = await Order.countDocuments();

  // Step 1: Get all paid + confirmed orders with product data
  const paidOrders = await Order.find({
  
  }).populate("products.product", "price");

  // Step 2: Calculate total revenue
  let totalRevenue = 0;

  paidOrders.forEach(order => {
    order.products.forEach(item => {
      const price = item.product?.price || 0;
      const quantity = item.quantity || 0;
      totalRevenue += price * quantity;
    });
  });

 

  res.status(200).json({
    message:"data dashboard got",
    data:{
 product,
    categories,
    orders,
    totalRevenue
    }
  })
}
