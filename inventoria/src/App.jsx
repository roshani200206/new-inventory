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




function App() {
   
  return (
  
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<PractiseNav/>}/>
        <Route path='/test'  element={<Multiply/>}/>
        <Route path='/add'  element={<Add/>}/>
        <Route path='/product-page'  element={<ProductPage/>}/>
        <Route path='/DemoPage' element={<DemoPage/>}/>
        <Route path='/SignupPage' element={<SignupPage/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
        <Route path='/AddProduct123' element={<AddProduct123/>}/>
        <Route path='/EditProduct' element={<EditProduct/>}/>
        <Route path='/AddCategory' element={<AddCategory/>}/>
        <Route path='/EditCategory' element={<EditCategory/>}/>
        

      </Routes>
      </BrowserRouter>
 


    </div>
  
  )
}

export default App
