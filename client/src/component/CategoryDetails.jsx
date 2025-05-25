import React, { useEffect } from 'react'
import { Link } from 'react-router';

function CategoryDetails({category}) {
    console.log(category)

    async  function handleDelete ()
{
    console.log(category._id)

     try {
    const res = await fetch("http://localhost:3000/api/category/delete/"+category._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
  
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert("Error: " + errorData.message);
      return;
    }


    alert("Category deleted: " +category.name);

  } catch (err) {
   
    alert("An unexpected error occurred.");
  }


}

  return (
    <div>
        <div style={{
            display:"flex",
            gap :"20px"
        }}>

        {category.name}
        <Link to={"/EditCategory/"+category._id} >EditCategory</Link>
    <button onClick={handleDelete}>delete</button>
        </div>
    </div>
  )
}

export default CategoryDetails