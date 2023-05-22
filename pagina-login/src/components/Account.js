import { useState} from "react";
import { TbTrash } from "react-icons/tb";
const Account = ({account, onDelete}) => {
  const [showLogin, setShowLogin]= useState(false);



  const handleClick=()=>{
    setShowLogin(!showLogin)
  };



  return (
    
    <div className ='Account'  onClick = {handleClick}>

      <h4>{account.username}</h4>
          {showLogin&&
        <form >
          <label>Password</label>
          <input type = 'password' />
        </form>}
    </div>
    
    
  )
}

export default Account
