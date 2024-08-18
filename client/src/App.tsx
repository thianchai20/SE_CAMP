import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Content from './Component/Content'
import Add from './Component/Add'

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Content/>} />
            <Route path = "/add" element = {<Add/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
