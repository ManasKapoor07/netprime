import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='loginScreen'>
            <div className='LoginScreen_backGround'>
                <div>
                    <img className='loginScreen_logo'
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    ></img>
                    <button className='loginScreen_button'>
                        Sign In
                    </button>
                    <div className='loginScreen_gradient'/>
                    
                    <div className='loginScreen_body'>
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>
                                Watch Anywhere. Cancel any time.
                            </h2>
                            <h3>
                            Ready to watch? Enter your email to create or restart your membership.
                            </h3>
                            <div className='loginScreen_input'>
                                <form>
                                    <input type='email'
                                        placeholder='Email Address'
                                        
                                    />
                                    <button className='loginScreen_GetStarted'>GET STARTED</button>
                                </form>
                            </div>
                        </>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login