import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../img/women.jpg";
import Axios from "axios";

function TopContainer({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  /* useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
    console.log("Search query: ", searchTerm)
  }, []); */

  return (
    <div className="topContainer">
      {/* <div className="inputBox">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar piezas..."
        />
        <i>
          <BiSearchAlt onClick={handleSearch} />
        </i>
      </div> */}

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src={women} alt="" />
        </div>
        <p className="profileName">Marcos Mello</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        {/* <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Web design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI design</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default TopContainer;
