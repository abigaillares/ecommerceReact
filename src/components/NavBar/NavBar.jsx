import CartWidget from "./CartWidget"
import { GrHome } from "react-icons/gr";
import { Link } from "react-router-dom"


import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/mesa" className="text-link">mesas</Link>
        </li>
        <li className="category">
          <Link to="/category/sillas" className="text-link" >sillas</Link>
        </li>
        <li className="category">
          <Link to="/category/Living" className="text-link">living</Link>
        </li>
        <li className="category">
          <Link to="/category/escritorio" className="text-link">escritorios</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <GrHome />
        <p className="title-brand ">Nordica Store</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar