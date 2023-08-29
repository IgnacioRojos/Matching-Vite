import { NavLink, useLocation } from 'react-router-dom'
import './navbar.css'
import { useRef, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <header className='navbar'>
			<img src="/logoMatching.png" alt="" />
			<nav ref={navRef} className='linksContainer'>
				<a className='navMargin' href="/home">Inicio</a>
				<a href="/servicios">Servicios</a>
				<a href="/nosotros">Nosotros</a>
				<a href="/contacto">Contacto</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  )
}

export default NavBar