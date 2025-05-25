import React from 'react'
import { BrowserRouter, Route } from 'react-router'
import Multiply from './multiply'
import Add from './add'


function RouteDemo() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/multiply' element={<Multiply/>}/>
            <Route path='/add' element={<Addition/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteDemo