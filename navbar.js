// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ff4c4c;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;

  &:hover {
    background-color: white;
    color: #ff4c4c;
    border-radius: 5px;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/donate">Donate Blood</NavLink>
      <NavLink to="/recipient">Need Blood</NavLink>
      <NavLink to="/inventory">Blood Inventory</NavLink>
    </Nav>
  );
}

export default Navbar;
