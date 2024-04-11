import React from "react";
import styles from "./footer.module.css";
import MySVG from "../SVGComponent/SVGComponent"; // Ensure correct import path
import { sponsors } from "@/Constants"; // Ensure correct import path

export default function FooterComponent() {
  return (
    <>
    <div className={styles.texts}>
        <h1>Our Sponsors:</h1>
      </div>
    <footer className={styles.footer}>
      
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className={styles.socialItem}>
              <a href={sponsor.url} target="_blank" rel="noreferrer" className={styles.socialIcon}>
              <img src={sponsor.logo.src} alt={sponsor.name} style={{ width: '100%', height: 'auto' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </footer>
    </>
  );
}
