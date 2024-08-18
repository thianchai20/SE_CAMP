import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import Content from './Component/Content'
import Add from './Component/Add'
import Edit from './Component/Edit'

function App() {

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Content/>} />
            <Route path = "/add" element = {<Add/>} />
            <Route path = "/edit" element = {<Edit/>} />
            <Route path = "/edit/:id" element = {<Edit/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
