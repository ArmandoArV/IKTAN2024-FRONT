import React from "react";
import styles from "./page.module.css";
import LightMeasure from "@/Components/LightMeasureContainer/LightMeasure";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}>
          <LightMeasure />
        </div>
      </div>
    </main>
  );
}
