import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/orderItemContext';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';


function ProductDetails({ product }) {
  const { addToCart } = useCart();

  async function handleDelete() {
    try {
      const res = await fetch("http://localhost:3000/api/product/delete/" + product._id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      alert("Product deleted: " + product.name);
    } catch (err) {
      alert("An unexpected error occurred.");
    }
  }

  const handleAddToCart = () => {
    addToCart(product, 1); 
    alert(`${product.name} added to cart.`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "10px", alignItems: "center" }}>
     
      <Card>
        <CardContent>
            <Typography variant="h4" component="div">
       {product.name}
      </Typography>
      <Typography component="p">
        Stock: <span style={{
          color:"green"
        }}>{product.stock}</span>
      </Typography>

        </CardContent>

        <CardActions>
          <Button variant='outlined'>

  <Link to={"/EditProduct/" + product._id}>Edit</Link>
          </Button>
      <Button variant='outlined' color='error' onClick={handleDelete}>Delete</Button>
      <Button variant='contained' onClick={handleAddToCart}>Add to Cart</Button> 
        </CardActions>
        <CardActions>

        </CardActions>
      
    
      </Card>
    </div>
  );
}

export default ProductDetails;
