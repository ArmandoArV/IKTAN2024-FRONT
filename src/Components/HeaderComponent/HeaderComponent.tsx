"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeaderComponent.module.css";
import { navItems } from "@/Constants";
import logo from "../../Images/Logo.png";
interface MenuItem {
  id: string;
  label: string;
  path: string;
}

interface HeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  onMenuToggle: () => void;
  idUser?: number;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  isAuthenticated,
  isAdmin,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let filteredMenuItems: MenuItem[] = [];

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
          <img src={logo.src} />
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
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
