import CartWidget from './cartWidget'
import React from 'react'
import logo from "../../assets/logo.png"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='brand'>
        <img src={logo} alt="" width={40} />
      </div>

      <ul className='categories'>
        <li className='item'>Inicio</li>
        <li className='item'>Productos</li>
        <li className='item'>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar