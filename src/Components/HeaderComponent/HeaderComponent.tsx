"use client";
import React from "react";
import styles from "./HeaderComponent.module.css";
import logo from "../../Images/Logo.png";
import { navItems } from "@/Constants";

const HeaderComponent: React.FC = () => {
  const handleMenuItemClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Splitting navItems into two separate arrays for left and right menus
  const leftMenuItems = navItems.slice(2);
  const rightMenuItems = navItems.slice(0, 2);

  return (
    <div className={styles.container}>
    <header className={styles.Header}>
      <div className={styles.headerContent}>
        <nav className={styles.menuContainer}>
          <ul className={styles.menuList}>
            {leftMenuItems.map((item, index) => (
              <li className={styles.menuItem} key={index}>
                <p onClick={() => handleMenuItemClick(item.path)}>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.headerLogo}>
            <img src={logo.src} alt="Logo" />
          </div>
          <ul className={styles.menuList}>
            {rightMenuItems.map((item, index) => (
              <li className={styles.menuItem} key={index}>
                <p onClick={() => handleMenuItemClick(item.path)}>
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default HeaderComponent;
