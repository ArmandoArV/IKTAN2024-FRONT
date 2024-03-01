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
            Each year the NASA Human Exploration Rover Challenge (HERC) features
            an engineering design challenge to engage students worldwide in the
            next phase of human space exploration. As an Artemis Student
            Challenge, HERC draws inspiration from both the Apollo and Artemis
            missions, emphasizing designing, constructing, and testing
            technologies, and traversing in unique environmental terrains.
          </p>
          <p>
            During Apollo 15 astronauts utilized the first automotive vehicle on
            the moon, the Lunar Roving Vehicle (LRV). With this rover,
            astronauts were able to collect more lunar samples than the previous
            two Moon-landing missions combined and spent twice the time on Moon
            than Apollo 14. Taking inspiration from the LRV, HERC aligns with
            NASA’s mission to further scientific exploration and experiments on
            the Moon with the use of a roving vehicle.
          </p>
        </div>
      </div>
    </>
  );
}
