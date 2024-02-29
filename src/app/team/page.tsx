import React from "react";
import styles from "./page.module.css";
import PeopleComponent from "@/Components/PeopleComponent/PeopleComponent";
import { peopleInfo } from "@/Constants";
import Bernardo from "../../Images/People/Bernardo.jpg";
import Dani from "../..Images/People/Dani.jpg";
import David from "../..Images/People/David.jpg";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.title}>Our Team:</h1>
      </div>
      <div className={styles.bottom}>
        <div className={styles.leftBottom}>
          <PeopleComponent
            name={peopleInfo.David.name}
            position={peopleInfo.David.position}
            image={David}
          />
        </div>
        <div className={styles.middleBottom}>
          <PeopleComponent
            name={peopleInfo.Dani.name}
            position={peopleInfo.Dani.position}
            image={Dani}
          />
        </div>
        <div className={styles.rightBottom}>
          <PeopleComponent
            name={peopleInfo.Bernardo.name}
            position={peopleInfo.Bernardo.position}
            image={Bernardo}
          />
        </div>
      </div>
    </main>
  );
}
