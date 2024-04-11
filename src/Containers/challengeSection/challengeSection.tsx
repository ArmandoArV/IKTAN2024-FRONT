import React from "react";
import tec1 from "../../Images/tec1.jpg";
import tec2 from "../../Images/tec2.jpg";
import tec3 from "../../Images/tec3.jpg";
import SliderComponent from "@/Components/SliderComponent/SliderComponent";
import styles from "./challengeSection.module.css";

export default function ChallengeSection() {
  const images = [tec1, tec2, tec3];
  return (
    <>
      <div className={styles.left}>
        <SliderComponent images={images} slideInterval={3000} />
        <p>
            During <strong>Apollo 15 </strong> astronauts utilized the first automotive vehicle on
            the moon, the <strong>Lunar Roving Vehicle (LRV)</strong>. With this rover,
            <strong> astronauts were able to collect more lunar samples than the previous
            two Moon-landing </strong> missions combined and spent twice the time on Moon
            than Apollo 14. <strong>Taking inspiration from the LRV, HERC aligns with
            NASA’s</strong> mission to further scientific exploration and <strong>experiments on
            the Moon with the use of a roving vehicle.</strong>
          </p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h1 className={styles.title}>Rover Challenge</h1>
        </div>
        <div className={styles.middle}>
          <h2>The Human Space Exploration Vehicle</h2>
        </div>
        <div className={styles.bottom}>
          <p>
            Each year the <strong>NASA Human Exploration Rover Challenge (HERC)</strong> features
            an engineering design <strong>challenge to engage students</strong> worldwide in the
            <strong> next phase of human space exploration.</strong> As an Artemis Student
            Challenge, HERC draws inspiration from both the Apollo and Artemis
            missions, emphasizing <strong>designing, constructing, and testing
            technologies,</strong> and traversing in unique environmental terrains.
          </p>
          <SliderComponent images={images} slideInterval={3000} />
        </div>
      </div>
    </>
  );
}
