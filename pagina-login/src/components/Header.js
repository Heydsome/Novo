import PropTypes from 'prop-types'


const Header = ({text}) => {
    
  return (
    <header className='header'>
       <h1>{text}</h1>   
    </header>
  )   
}

Header.defaultProps={
    title:"Hello there",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
