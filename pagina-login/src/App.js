import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {useState, useEffect} from  'react'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Signup from './components/Signup'
import { FaEnvelope } from "react-icons/fa";
import {VscAccount} from "react-icons/vsc";
import Login from './components/Login';
import Accounts from './components/Accounts';


const App = () => {
  const [showAddAccount,setShowAddAccount] = useState(false)
  const [accounts, setAccounts] = useState([])



  useEffect(()=>{
    const getAccounts = async()=> {
      const AccountsFromServer = await fetchAccounts()
      setAccounts(AccountsFromServer)
    }
    getAccounts()
  }, [])


    const fetchAccounts = async() => {
    const res = await fetch('http://localhost:5000/Accounts')
    const data = await res.json()
    return data
  }
    // Fetch Account
    const fetchAccount = async (id) => {
    const res = await fetch(`http://localhost:5000/Accounts/${id}`)
    const data = await res.json()
  
    return data
    }

  const deleteAccount = async (id) =>
  {
    await fetch(`http://localhost:5000/Accounts/${id}`,{
      method:'DELETE'
    })
    console.log('delete', id)
    setAccounts(Accounts.filter((account)=> account.id !== id))
  }  




  // Add Account
  const addAccount = async (account) => {
    const res = await fetch('http://localhost:5000/Accounts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(account),
    })

    const data = await res.json()

    setAccounts([...accounts, data])


  }

  return(

      <Router>  
          <div className='container'>
           

            <Routes> 
            
            <Route path='/' element={(
              <>
                  <Header text = 'Welcome '>
                  </Header>
                  
                  <button className='btn' onClick={()=>{window.location.href ='/newUser'}}>
                  <FaEnvelope/> 
                  <span>Sign up with email</span> </button>
                  <button className='btn' onClick={()=>{window.location.href ='/Accounts'}}>
                  <VscAccount/> 
                  <span>Login with email</span> </button>
                  
              </>
            )
            }>

            </Route>

            <Route path = '/newUser' element= {(
              <>
                <Signup/>               
              </>
            )
            }>
             
 
            </Route>

            <Route path = '/Accounts' element= {(
              <>
                  <Accounts accounts={accounts} onDelete={deleteAccount}/>
              </>
            )
            }>
             
 
            </Route>
            <Route path = '/login' element= {(
              <>
                  <Login/>
              </>
            )
            }>
             
 
            </Route>

            <Route path='/about' element={<About />}/>
                        
            </Routes>
           
            
          </div>
          <Footer/> 
      </Router>
    
    )
  }


export default App;
