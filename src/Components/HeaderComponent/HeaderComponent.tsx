import React from "react";
import styles from "./HeaderComponent.module.css";
import MySVG from "@/Components/SVGComponent/SVGComponent";
import { navItems, socialMedia } from "@/Constants";
import logo from "@/Images/Logo.png";

export default function HeaderComponent() {
  return (
    <nav className={styles.navbar}>
      <img src={logo.src} alt="Logo" width={100} height={100} />
      <ul className={styles.navbarNav}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href={item.path} className={styles.navLink}>
              {item.name}
            </a>
          </li>
        ))}
        {socialMedia.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <MySVG name={item.icon} color={"#FF0000"} nameClass={styles.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
