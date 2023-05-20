import {useState} from 'react'

const FetchAccount = ({onFetch}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = (e)=>{
      e.preventDefault()
      if(!username){
          alert('Please add a username')
          return
      }
      if(!password){
          alert('Please add a password')
          return
      }
      onFetch({username,password})
      setUsername('')
      setPassword('')
    
    }
    return (
      <form className = 'add-form' onSubmit={onSubmit}>
      
         <div className='form-control'>
              <label>Name</label>
              <input type = 'name'/>
             
          </div>
          <div className='form-control'>
          <label>Gender</label>

                <select id="selectOption" name="option">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
     

          <label>Age</label>
                <input type='date'></input>

          </div>
          <div className='form-control'>
              <label>Username</label>
              <input type = 'username'
                  value={username} onChange={(e)=> setUsername(e.target.value)}
              />
              
          </div>
          
          <div className='form-control'>
              <label>Password</label>
              <input type = 'password' placeholder=''
                  value={password} onChange={(e)=> setPassword(e.target.value)}
              />
          </div>
                   
          <input type = 'submit' value ="Sign Up" className = 'btn btn-block'
           
  
           />
      </form>
    )
  }

export default FetchAccount
