import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router';
import Multiply from '../multiply';

function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/multiplied' element={<Multiply/>}>
              

              </Route>
           </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App;