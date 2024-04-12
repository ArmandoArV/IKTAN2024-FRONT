import React from "react";
import styles from "./landingSection.module.css";
import { RoverModel } from "@/Components/RoverModel/RoverModel";
import WeAreIktan from "@/Images/WeAreIktan.png";
import Image from "next/image";
import DashboardNotification from "@/Components/DashboardNotification/DashboardNotification";

const LandingSection = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <div
          style={{
            width: "50%",
            marginLeft: "auto",
          }}
        >
          <Image src={WeAreIktan} alt="We are Iktan" width={665} height={176} />
        </div>

        <div
          style={{
            marginRight: "100px",
          }}
        >
          <DashboardNotification />
        </div>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h1 className={styles.title}>Meet our beast</h1>
          </div>
          <div className={styles.middle}>
            <h2>The Human Space Exploration Vehicle</h2>
          </div>
          <div className={styles.bottom}>
            <p>
              Meet our <strong>Rover</strong>, which is a representation of{" "}
              <strong>months of work</strong> and great{" "}
              <strong>teamwork</strong>. It has been a long process, and various
              obstacles arose, but we, the members of the{" "}
              <strong>IKTAN Roving team</strong>, based on{" "}
              <strong>perseverance, dedication, and passion</strong> for
              learning, were able to achieve our goals.
            </p>
            <p>
              Taking the previous <strong>vehicle designs</strong> from previous
              editions as a starting point,{" "}
              <strong>functionalities have been improved</strong> and this has
              resulted in a <strong>better space exploration vehicle</strong>{" "}
              that takes the best features of its previous versions, refines
              them and implements new ideas.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <RoverModel />
        </div>
      </div>
    </>
  );
};

export default LandingSection;
