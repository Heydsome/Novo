import Account from './Account'

const Accounts = ({accounts,onDelete}) => {
 
  return (
   <>

    <header>
        <h1>Welcome Back</h1>
    </header>   
    {accounts.map((account) => (
      
      <Account key={account.id} account ={account} onDelete={onDelete}></Account>
      ))}
      <div className='Account' onClick={()=>{window.location.href ='/Login'}}>
       <h4>Use Another Account</h4>
     </div>
     <div className='Account' onClick={()=>{window.location.href ='/newUser'}}>
       <h4>Create a New Account</h4>
     </div>
     
  </>   
    
  )
}

export default Accounts
