import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#14ce4c",
  },
  activeLink: {
    color: "#dd6312",
  },
};

const Navigation = () => {
  return (
    <nav>
      <ul className="NavList">
        <li className="NavListItem">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            All currencies
          </NavLink>
        </li>

        <li className="NavListItem">
          <NavLink
            to="/mycurrencies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            My currencies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
