import React, { useState } from "react";
import { ImFire } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";
import { FaList } from "react-icons/fa";
// import { BsCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <ul className="aside-navbar-list">
        <Link to="/tranding">
          <ImFire />
          <br />
          <span className="nav-link">Popular</span>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
