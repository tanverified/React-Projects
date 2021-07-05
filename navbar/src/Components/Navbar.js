import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <NavLink className='navlink' exact activeClassName='active_class' to="/">Home</NavLink>
      <NavLink className='navlink' exact activeClassName='active_class' to="/services">Services</NavLink>
      <NavLink className='navlink' exact activeClassName='active_class' to="/about">About</NavLink>
      <NavLink className='navlink' exact activeClassName='active_class' to="/contact">Contact Us</NavLink>
    </div>
  );
};

export default Navbar;
