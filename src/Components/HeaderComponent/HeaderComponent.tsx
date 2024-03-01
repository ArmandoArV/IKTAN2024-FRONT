"use client";
import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";
import logo from "../../Images/Logo.png";
import { navItems } from "@/Constants";

interface HeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  isAuthenticated,
  isAdmin,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (id: string) => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={styles.Header}>
        <div
          className={`${styles.headerMenu} ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          &#9776;
        </div>
        <div className={styles.headerLogo}>
          <img src={logo.src} alt="Logo" />
        </div>
      </header>
      {isMenuOpen && (
        <div
          className={`${styles.MenuDesplegable} ${
            isMenuOpen ? styles.open : ""
          }`}
        >
          <ul className={`${styles.listaMenu} ${isMenuOpen ? "active" : ""}`}>
            {navItems.map((item, index) => (
              <li className={styles.listLi} key={index}>
                <p onClick={() => handleMenuItemClick(item.path)}>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
