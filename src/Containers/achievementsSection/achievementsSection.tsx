import React from "react";
import styles from "./achievementsSection.module.css";
import { achievements } from "@/Constants";
import AchievementComponent from "@/Components/AchievementComponent/AchievementComponent";
const AchievementsSection: React.FC = () => {
  return (
    <section className={styles.achievementsSection} id="achievements">
        <h1 className={styles.achievementsTitle}>Achievements</h1>
      <div className={styles.topSection} id="achievements">
        {achievements
          .slice(0, achievements.length / 2)
          .map((achievement, index) => (
            <AchievementComponent
              key={index}
              achievementImage={achievement.achievementImage}
              achievementTitle={achievement.achievementTitle}
              achievementYear={achievement.achievementYear}
            />
          ))}
      </div>
      <div className={styles.bottomSection} id="achievements">
        {achievements
          .slice(achievements.length / 2)
          .map((achievement, index) => (
            <AchievementComponent
              key={index}
              achievementImage={achievement.achievementImage}
              achievementTitle={achievement.achievementTitle}
              achievementYear={achievement.achievementYear}
            />
          ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
