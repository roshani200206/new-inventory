import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'

function ProtectedRoute() {

    const [user ,setUser] = useState({})
    const [isLoading,setIsLoading]= useState(false)

    useEffect(()=>
        {

           async function fetchUser (){
 try {
                setIsLoading(true)

                const res = await fetch("http://localhost:3000/api/user",{
          credentials: 'include', // Optional: depends on your auth setup
        })
                const data = await res.json()

                console.log(data)

                setUser(data)
                
            } catch (error) {
                console.log("error while fetching user ")
                
            }finally{
                setIsLoading(false)
            }
           }

           fetchUser()

           

        },[])

        if(isLoading){
            return <div>Loadin....</div>
        }
        if(!user ){
return <Navigate to={"/login"}/>
        }
  return (
    <Outlet/>
 
  )
}

export default ProtectedRoute