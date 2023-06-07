import React, { useState } from 'react'
import "./signup.css"
import { ToastContainer, toast,  Flip} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function Signup() {
  const name= ("SIGN UP")
   const [inputValue, setInputValue]= useState("")
   const handleInputChange= (e)=>{
    setInputValue(e.target.value)
   }
   const handleSubmit =(e)=>{
    e.preventDefault();
    if (inputValue.trim ()=== ""){
        toast.error("please fill all information", {position:toast.POSITION.BOTTOM_RIGHT,autoClose:false, theme:"colored" })
    }
    else {
        toast.success("You have successful sign up!", {position:toast.POSITION.TOP_RIGHT, autoClose:1000, theme:"colored"})
    }
   }
  return (
    <div> 
        <div className='signup-container'>
            <div className='signup-container-one'>
            <div className='signup-content-one'>
                <h1>Welcome to our site!</h1>
                <p>Please enter your Registration details, and start journey with us.</p>
                <a href='./signin.js'>SIGN IN</a>
            </div>
            </div>
            <div className='signup-container-two'>
        <div className='signup-content-two'>
                <h1>CREATE ACCOUNT</h1>
                <form>
         <div className='signup-name' >
             <input type='text' placeholder='First Name' value={inputValue} />
            <input type='text' placeholder='Last Name'/><br/></div> 
            <input type='text' placeholder='UserName'/><br/>
            <input type='email' placeholder='Email '/><br/>
            <input type='phone' placeholder='Phone '/><br/>
            <input type='password' placeholder='Password'/><br/>
            <input type='password' placeholder='Confirm Password'/><br/>
           <div className='check'>
             <input type='checkbox' name='agree' id='check' /> 
            <label>I Agree to the terms and conditions of use.</label><br/></div>
            <input type='submit'  value={name} id='signup-btn' onClick={handleSubmit}/>
            <ToastContainer transition={Flip}  hideProgressBar={true} closeButton= {<p>Close</p>} > </ToastContainer>
            </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;
