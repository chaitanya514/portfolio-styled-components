import React from "react";
import { HeaderBar, Logo, ThemeToggle } from "./styles/Header";

function Header() {
  return (
    <HeaderBar>
      <Logo>__CP10__</Logo>
      <ThemeToggle>
        <img src="./moon.svg" alt="" />
      </ThemeToggle>
    </HeaderBar>
  );
}

export default Header;
