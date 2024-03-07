import React from "react";
import styles from "./footer.module.css";
import MySVG from "../SVGComponent/SVGComponent";
import { socialMedia } from "@/Constants";

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          {socialMedia.map((link, index) => (
            <div key={index} className={styles.socialItem}>
              <div className={styles.socialIcon}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <MySVG name={link.fa_icon} color="#fff" />
                </a>
              </div>
              <div className={styles.socialText}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footerContent}>
        <p>&copy; 2021 RoverX Team</p>
      </div>
    </footer>
  );
}
