import React from "react";
import { SiGithub, SiLinkedin } from 'react-icons/si';
import styled from "styled-components";
import { Heading } from "./Text";
import { colors } from "../utils/colors";

const NavbarSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  background-color: #e62e00;
  text-align: center;
`;

const NavbarLinks = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  margin-right: 50px;
`;

const NavbarText = styled.nav`
  display: flex;
`;

function Navbar() {
  return (
    <NavbarSection>
      <NavbarLinks>
        <NavLink target="_blank" rel="noreferrer" href="https://github.com/athomascode"><SiGithub size={20}/></NavLink>
        <NavLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aishwarya-t"><SiLinkedin size={20}/></NavLink>    
      </NavbarLinks>
      <NavbarText>
        <Heading fs="1rem" color={colors.white}>athomascode</Heading> 
      </NavbarText>       
    </NavbarSection>
  )
}

export default Navbar;