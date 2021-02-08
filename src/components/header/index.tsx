// PART 1 - Routing
// Section 2
// Make logo link back to homepage using react-router-dom

import React from "react";
import { AppHeader } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppHeader>
      <Link to="/">
        <img src={logo} alt="weedmaps logo" />
      </Link>
    </AppHeader>
  );
};

export default Header;
