import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Multiply from './multiply'
import { BrowserRouter, Route, Routes } from 'react-router'
import Add from './add'
import Navbar from './routing-practice/Navbar'
import PractiseNav from './routing-practice/Practise-Nav'
import ProductPage from './page/ProductPage'
import DemoPage from './page/DemoPage'
import SignupPage from './page/signupPage'
import LoginPage from './page/LoginPage'
import AddProduct123 from './component/AddProduct123'
import EditProduct from './component/EditProduct'
import AddCategory from './component/AddCategory'
import EditCategory from './component/EditCategory'
import CategoryPage from './page/CategoryPage'
import Layout from './component/Layout'
import ProtectedRoute from './component/protectedRoute'
import OrderPage from './page/OrderPage'
import Overview from './page/OverViewPage'
import CartPage from './page/CartPage'




function App() {
   
  return (
  
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route element = {<ProtectedRoute/>}>
        <Route path='/' element ={<Layout/>}>
        <Route index element={<Overview/>}/>

        <Route path='/test'  element={<Multiply/>}/>
        <Route path='/add'  element={<Add/>}/>
        <Route path='/product-page'  element={<ProductPage/>}/>

        <Route path='/DemoPage' element={<DemoPage/>}/>
        <Route path='/SignupPage' element={<SignupPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/AddProduct123' element={<AddProduct123/>}/>
        <Route path='/EditProduct/:pid' element={<EditProduct/>}/>
        <Route path='/AddCategory' element={<AddCategory/>}/>
        <Route path='/EditCategory/:cid' element={<EditCategory/>}/>
        <Route path='/CategoryPage' element={<CategoryPage/>}/>
        <Route path='/OrderPage' element={<OrderPage/>}/> 
        <Route path='/cartPage' element={<CartPage/>}/> 


          </Route>
          </Route>

      </Routes>
      </BrowserRouter>
 


    </div>
  
  )
}

export default App
