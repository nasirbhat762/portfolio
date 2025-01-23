import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import MobileNavbar from './MobileNavbar'

export default function Header() {
  let showMobileNav = () => {
    document.getElementById("nav2").classList.remove("outanimation")
    document.getElementById("nav2").classList.add("inanimation")
    document.getElementById("nav2").style.display = "inline-block"
  }
  return (
    <header>
      <h1>Nasir</h1>
      <Navbar></Navbar>
      <button onClick={showMobileNav}>Show Nav</button>
      <MobileNavbar></MobileNavbar>
    </header>
  )
}
