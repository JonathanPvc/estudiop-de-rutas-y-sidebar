import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            <FontAwesomeIcon icon={faHome} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            <FontAwesomeIcon icon={faCog} />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
