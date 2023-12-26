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

            {action==="Sign Up"?
            // Render Sign Up Form
            <form action="">
                <div className="inputs">

                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Enter your name'/>
                    </div>
                    
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email'/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your Password'/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Confirm Password'/>
                    </div>

                    <div className="submit">{action}</div>
                </div>
            </form>
            :
            // Render Log In form
            <form action="">
                <div className="inputs">                  
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Enter your email'/>
                    </div>

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Enter your Password'/>
                    </div>

                    <div className="submit">{action}</div>
                </div>
            </form>}
        </div>
        <div className='Accessory'> </div>
    </div>
  )
}

export default LoginSignup