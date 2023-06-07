
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Signup from '../../pages/signup/signup'
import Signin from '../../pages/signup/signin'

const Index= () => {
  return (
    <div>
        <Routes>
        <Route path="/signup.js" element={<Signup/>} />   
        <Route path="/signin.js" element={<Signin/>} />   
        </Routes>
    </div>
  )
}

export default Index;