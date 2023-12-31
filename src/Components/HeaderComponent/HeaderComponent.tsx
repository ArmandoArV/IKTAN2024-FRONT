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
      <Link href="/" passHref>
        <img src={logo.src} alt="Logo" width={100} height={100} />
      </Link>
      <ul className={styles.navbarNav}>
        {navItems.map((item) => (
          <Link key={item.id} href={item.path} passHref>
            <li className={styles.navItem}>
              <p className={styles.navLink}>{item.name}</p>
            </li>
          </Link>
        ))}
        {socialMedia.map((social, index) => (
          <Link key={index} href={social.url} passHref>
            <li className={styles.navItem}>
              <img
                src={
                  social.name === "Facebook"
                    ? Facebook.src
                    : social.name === "Instagram"
                    ? Instagram.src
                    : TikTok.src
                }
                alt={social.name}
                className={styles.socialMedia}
              />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
