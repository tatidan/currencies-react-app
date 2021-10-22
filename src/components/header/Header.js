import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import AppBar from "../AppBar";
import { HeaderContainer } from "../HeaderStyled";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);

  return (
    <div>
      <HeaderContainer colors={theme.colors}>
        <AppBar />
        <ThemeSwitcher />
      </HeaderContainer>
    </div>
  );
};

export default Header;
