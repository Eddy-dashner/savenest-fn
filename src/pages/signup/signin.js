import React from 'react'
import "./signin.css"

const Signin = () => {
   const name= ("SIGN IN")
  return (
    <div> 
        <div className='Signin-container'>
           
            <div className='Signin-container-two'>
        <div className='Signin-content-two'>
                <h1>SIGN IN</h1>
            <input type='email' placeholder='Email '/><br/>
            <input type='password' placeholder='Password'/><br/>
          <div className='check-container'> 
            <div className='check'> 
            <input type='checkbox' name='agree' id='check' /> 
            <label>Remember me</label></div>
            <div className='forget'><a href='g'>Forget Password?</a></div>
            </div>
            <input type='submit'  value={name} id='Signin-btn'/>
            </div>
            </div>
            <div className='Signin-container-one'>
            <div className='Signin-content-one'>
                <h1>Welcome back!</h1>
                <p>To keep connected with us please Sign in with your personal info.</p>
                <a href='./signup.js'>SIGN UP</a>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Signin;