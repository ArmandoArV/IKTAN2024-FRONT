"use client";
import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";
import { navItems, socialMedia } from "@/Constants";
import logo from "../../Images/Logo.png";
import Facebook from "../../Images/Facebook.png";
import Instagram from "../../Images/Instagram.png";
import TikTok from "../../Images/TikTok.png";
import Link from "next/link";

export default function HeaderComponent() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  return (
    <div>
      <button onClick={toggleHeader} className={styles.hamburger}>
        {isHeaderOpen ? (
          <p>←</p>
        ) : (
          <p>☰</p>
        )}
      </button>
      <nav className={`${styles.navbar} ${isHeaderOpen ? "" : styles.open}`}>
        <Link href="/" passHref>
          <img
            className={styles.logo}
            src={logo.src}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className={styles.navbarNav}>
          {navItems.map((item) => (
            <Link key={item.id} href={item.path} passHref>
              <li className={styles.navItem}>
                <p className={styles.navLink}>{item.name}</p>
              </li>
            </Link>
          ))}
          <div className={styles.socialMediaContainer}>
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
                    className={styles.socialMedias}
                  />
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </nav>
    </div>
  );
}
