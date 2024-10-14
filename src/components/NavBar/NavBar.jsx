import CartWidget from "./CartWidget"
import { FaCouch } from 'react-icons/fa';
import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link className="linkc" to="/category/mesa">Mesas</Link>
        </li>
        <li className="category">
          <Link className="linkc" to="/category/sillas">Sillas</Link>
        </li>
        <li className="category">
          <Link className="linkc" to="/category/escritorio">Escritorios</Link>
        </li>
      </ul>

      <Link to="/" className="linkc brand primary-font-color">
        <FaCouch className="icon-brand" />
        <p className="title-brand linkc">Nordica Store</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar