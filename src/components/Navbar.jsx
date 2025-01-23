import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav id='nav1'>

        <ul>
          <li>
            <NavLink to='/' style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#2AD87F" : "white"
            })}>Home</NavLink>

          </li>
          <li> <NavLink to='/about' style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#2AD87F" : "white"
          })}>About</NavLink></li>
          <li> <NavLink to='/Skills' style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#2AD87F" : "white"
          })}>Skills</NavLink></li>
          <li> <NavLink to='/contact' style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
            color: isActive ? "#2AD87F" : "white"
          })}>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
}
