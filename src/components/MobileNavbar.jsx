import React from 'react'
import './MobileNavbar.css'

export default function MobileNavbar() {
  let hideMobileNav = () => {
    document.getElementById("nav2").classList.remove("inanimation")
    document.getElementById("nav2").classList.add("outanimation")

  }
  return (
    <nav id='nav2'>
      <button onClick={hideMobileNav}>Hide Nav</button>
    </nav>
  )
}
