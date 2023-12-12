import React from "react";
import styles from "./HeaderComponent.module.css";
import MySVG from "@/Components/SVGComponent/SVGComponent";
import { navItems, socialMedia } from "@/Constants";
import logo from "@/Images/Logo.png";
import Facebook from "@/Images/Facebook.png";
import Instagram from "@/Images/Instagram.png";
import TikTok from "@/Images/TikTok.png";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <nav className={styles.navbar}>
      <img src={logo.src} alt="Logo" width={100} height={100} />
      <ul className={styles.navbarNav}>
        {navItems.map((item, index) => (
          <Link href={item.path} passHref>
            <li key={index} className={styles.navItem}>
              <p className={styles.navLink}>{item.name}</p>
            </li>
          </Link>
        ))}
        <Link href={socialMedia[0].url} passHref>
          <li className={styles.navItem}>
            <img
              src={Facebook.src}
              alt="Facebook"
              className={styles.socialMedia}
            />
          </li>
        </Link>
        <Link href={socialMedia[1].url} passHref>
          <li className={styles.navItem}>
            <img
              src={Instagram.src}
              alt="Instagram"
              className={styles.socialMedia}
            />
          </li>
        </Link>
        <Link href={socialMedia[2].url} passHref>
          <li className={styles.navItem}>
            <img src={TikTok.src} alt="TikTok" className={styles.socialMedia} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
