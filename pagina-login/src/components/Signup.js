import FetchAccount from './FetchAccount'

const Signup = () => {
  return (
    <>
      <header className='header'>
            <h1> Signup </h1>
      </header>
      <h5>New around here?</h5>     
      <FetchAccount></FetchAccount>
      <a href='/login'>Already have an account?</a>
    </>
  )
}



export default Signup
