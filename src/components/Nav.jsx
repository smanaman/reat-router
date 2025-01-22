import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
   return(
    <>
<header>
  <nav className="navbar">
    <div className="logo">MyLogo</div>
    <ul className="nav-links">
      <li>
  <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/services'>Services</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
    <div className="hamburger">
      <span />
      <span />
      <span />
    </div>
  </nav>
</header>

    </>
   ) 
   


}
export default Nav