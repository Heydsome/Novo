import React from 'react'
import Accounts from './Accounts.js'

const Login = () => {
  return (
    <>
      <header className='header'>
            <h1> Login </h1>
            
      </header>
      <h5>Welcome back!</h5>
      <form className = 'add-form'>
        <div className='form-control'>
            <label>Username</label>
            <input type = 'text'/>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type = 'password'/>
        </div>
    </form>
    <a href='/newUser'>Create new account</a>
    </>
  )
}

export default Login
