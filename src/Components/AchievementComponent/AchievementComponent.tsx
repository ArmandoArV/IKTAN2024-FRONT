import React from "react";
import styles from "./AchievementComponent.module.css";
import { AchievementComponentProps } from "@/Constants";

const AchievementComponent: React.FC<AchievementComponentProps> = ({
  achievementImage,
  achievementTitle,
  achievementYear,
}) => {
  return (
    <div className={styles.achievementContainer}>
      <div className={styles.topPart}>
        <div className={styles.imgContainer}>
          <img
            src={achievementImage}
            alt={achievementTitle}
            className={styles.achievementImage}
          />
        </div>
      </div>
      <div className={styles.achievementDetails}>
        <h3 className={styles.achievementTitle}>{achievementTitle}</h3>
        <p className={styles.achievementYear}>{achievementYear}</p>
      </div>
    </div>
  );
};

export default AchievementComponent;
