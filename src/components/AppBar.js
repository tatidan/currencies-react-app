import React from "react";
import Navigation from "./Navigation";
import ThemeSwitcher from "./header/ThemeSwitcher";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const AppBar = () => {
  return (
    <header style={styles.header}>
      <Navigation />
      {/* <ThemeSwitcher /> */}
    </header>
  );
};

export default AppBar;
