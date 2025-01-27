import React from 'react'
import './MobileNavbar.css'

export default function MobileNavbar() {
  let hideMobileNav = () => {
    document.getElementById("nav2").classList.remove("inanimation")
    document.getElementById("nav2").classList.add("outanimation")

  }
  return (
    <nav id='nav2'>
      <button style={{ backgroundColor: "transparent", border: "none" }} onClick={hideMobileNav}><i style={{ backgroundColor: "#1e242b", fontSize: "30px", color: "white" }} class="ri-close-large-line"></i></button>
    </nav>
  )
}
