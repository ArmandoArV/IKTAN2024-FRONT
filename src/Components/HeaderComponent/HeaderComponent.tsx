"use client";
import React from "react";
import styles from "./HeaderComponent.module.css";
import logo from "../../Images/Logo.png";
import { navItems } from "@/Constants";
import { useRouter,usePathname  } from 'next/navigation'



const HeaderComponent: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const handleMenuItemClick = (id: string, name: string) => {
    const section = document.getElementById(id);
    
    if (section === null && pathname === '/' || pathname === '/dashboard') {
      //console.log("Redirecting to achievements page");
      router.push('/achievements')
    }
    if (section === null && pathname === '/achievements' || pathname === '/dashboard') { //Si en /achievements le picas a Achievements te manda a /, lo cual no deberia hacer
      const id = navItems.find((item) => item.name === name)?.path;
      router.push('/')
      setTimeout(() => { // Esto es horrible pero no encuentro otra manera de que sirva
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: "smooth" });
      }, 500)
    }
    if (section) {
      console.log(pathname)
      
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Splitting navItems into two separate arrays for left and right menus
  const leftMenuItems = navItems.slice(0, 2);
  const rightMenuItems = navItems.slice(2);

  return (
    <div className={styles.container}>
      <header className={styles.Header}>
        <div className={styles.headerContent}>
          <nav className={styles.menuContainer}>
            <ul className={styles.menuList}>
              {leftMenuItems.map((item, index) => (
                <li className={styles.menuItem} key={index}>
                  <p onClick={() => handleMenuItemClick(item.path, item.name)}>
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
                  <p onClick={() => handleMenuItemClick(item.path, item.name)}>
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
