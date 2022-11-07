import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ onSearch }) => {
  return (
    <div className="header">
      <h1>Users</h1>
      <div className="links">
        <Link to="/" className="link">
          Pagination
        </Link>
        <Link to="/lazy-load" className="link">
          Lazy Load
        </Link>
      </div>
      <input type="search" placeholder="Search by first name or last name" className="pa2 b--red" style={{ width: "40vw", height: "6vh" }} onChange={onSearch} />
    </div>
  );
};

export default Header;
