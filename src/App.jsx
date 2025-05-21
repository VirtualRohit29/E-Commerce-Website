import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"

import Courses from './Courses/Courses'
import Signup from './components/Signup'




const App = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup />} />


    
   </Routes>
    
    </>
  )
}

export default App