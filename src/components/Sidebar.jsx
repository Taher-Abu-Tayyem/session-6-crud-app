import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
    <ul className="list-unstyled">
        <li>
            <Link to={'/products'}>get all products</Link>
        </li>      
        <li>
            <Link to={'/cateogries'}>get all cateogries</Link>
        </li>
    </ul>
    </>
  );
};

export default Sidebar;
