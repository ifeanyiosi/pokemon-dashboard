import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.jpg";
import {
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";



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
      <Link to="/">
      <img src='https://www.transparentpng.com/thumb/home/Y0DWoN-home-simple.png' alt="" />
      </Link>

      <ul id="mainMenu">
        <Link to="/userlist">
        <Icon icon={<FaUserAlt />} />
        </Link>
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
