import React from "react";
import Wrapper from "../assets/wrappers/Navbar";

const Navbar = () => {
  return (
    <Wrapper>
      <div id="navbar">
        <a id="nav-link" href="#welcome-section">
          About
        </a>
        <a id="nav-link" href="#work">
          Projects
        </a>
        <a id="nav-link" href="#contact">
          Contact
        </a>
      </div>
    </Wrapper>
  );
};

export default Navbar;
