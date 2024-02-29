import React from "react";
import styles from "./page.module.css";
import PeopleComponent from "@/Components/PeopleComponent/PeopleComponent";
import { peopleInfo } from "@/Constants";
import Bernardo from "../../Images/Bernardo.jpg";
import Dani from "../../Images/Dani.jpg";
import David from "../../Images/David.jpg";
import TeamPic from "../../Images/TeamPic.png";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.title}>Our Team:</h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.leftBottom}>
          <div className={styles.peopleContainer}>
            <PeopleComponent
              name={peopleInfo.David.name}
              position={peopleInfo.David.position}
              image={David}
            />
          </div>
          <div className={styles.peopleContainer}>
            {" "}
            <PeopleComponent
              name={peopleInfo.Dani.name}
              position={peopleInfo.Dani.position}
              image={Dani}
            />
          </div>
          <div className={styles.peopleContainer}>
            {" "}
            <PeopleComponent
              name={peopleInfo.Bernardo.name}
              position={peopleInfo.Bernardo.position}
              image={Bernardo}
            />
          </div>
        </div>
        <div className={styles.rightBottom}>
          <div className={styles.boardImageContainer}>
            <img src={TeamPic.src} alt="Team" />
          </div>
        </div>
      </div>
    </main>
  );
}
