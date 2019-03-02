import React from "react"
import { NavLink } from "react-router-dom"

import { NavbarWrapper, AppIcon, Links } from "../styles/navbarStyles"

const Navbar = () => {
  return (
    <NavbarWrapper>
      <AppIcon>
        <i className="fas fa-clipboard" />
        <span>Posts App</span>
      </AppIcon>
      <Links>
        <NavLink exact to="/">
          Posts
        </NavLink>
        <NavLink to="/add">Add Post</NavLink>
      </Links>
    </NavbarWrapper>
  )
}

export default Navbar
