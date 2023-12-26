import React, { useState } from 'react'
import './LoginSignup.css'

// Importing icons
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
    
  return (
    <div className='Form'>
        <div className='container'>
            {/* Header of the component */}
            <div className="header">
                <h1 className={action==="Sign Up"?"header-text":"header-text gray"} onClick={()=>{setAction("Sign Up")}}>Signup </h1>
                <h1 className='header-text'>|</h1>
                <h1 className={action==="Log In"?"header-text":"header-text gray"} onClick={()=>{setAction("Log In")}}>Log In </h1>
            </div>

            {/* Inputs body */}
            <div className="inputs">
                {/* Username input field */}
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Enter your name'/>
                </div>
                
                {/* Email input field */}
                {action==="Log In"? <div></div> :<div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>}

                {/* Password input field */}
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Enter your Password'/>
                </div>

                {/* Password Confirmation input field */}
                {action==="Log In"? 
                <div></div> 
                :<div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Confirm Password'/>
                </div>}

                {action==="Sign Up"?<div></div> : 
                <div className="forget-password">Forgot your password?</div>}

                {/* Layout for submit buttons */}
                <div className="submit">{action}</div>

            </div>
        </div>
        <div className='Accessory'> </div>
    </div>
  )
}

export default LoginSignup