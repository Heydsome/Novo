import PropTypes from 'prop-types'
import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({title,onAdd, Add}) => {
    const location = useLocation()
  return (

    <header className='header'>
      <h1> {title}</h1>
      {location.pathname === '/' && <Button text={Add? 'Close':'Add'} color = {!Add? 'green' :'red'} onClick = {onAdd} />} 
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
