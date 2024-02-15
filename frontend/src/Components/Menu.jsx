
import React, { useEffect } from "react";
import "./menu.css";
import logo from "../img/nav-logo.jpg";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaSearch,
} from "react-icons/fa";
import { MdAddTask, MdPersonSearch } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img src={logo} alt="" />

      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} link="/" />
        <Icon icon={<BsPersonFillAdd />} link="/AddClient" />
        <Icon icon={<MdPersonSearch />} link="/SearchClient" />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<MdAddTask />} link="/AddPieces"/>
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
        <Icon icon={<FaSearch />} link="/SearchPiece"/>
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon, link }) => (
  <li>
    <a href={link}>{icon}</a>
  </li>
);

export default Menu;
