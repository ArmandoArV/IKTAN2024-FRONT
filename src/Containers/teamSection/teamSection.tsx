import styles from "./teamSection.module.css";
import PeopleComponent from "@/Components/PeopleComponent/PeopleComponent";
import Bernardo from "../../Images/Bernardo.jpg";
import David from "../../Images/David.jpg";
import Dani from "../../Images/Dani.jpg";
import Image from "next/image";
import TeamPic from "../../Images/TeamPic.png";
import { peopleInfo } from "@/Constants";

export default function TeamSection() {
  return (
    <>
      <div className={styles.topteamSection}>
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
            <PeopleComponent
              name={peopleInfo.Dani.name}
              position={peopleInfo.Dani.position}
              image={Dani}
            />
          </div>
          <div className={styles.peopleContainer}>
            <PeopleComponent
              name={peopleInfo.Bernardo.name}
              position={peopleInfo.Bernardo.position}
              image={Bernardo}
            />
          </div>
        </div>
        <div className={styles.rightBottom}>
          <div className={styles.boardImageContainer}>
            <Image src={TeamPic} alt="Team" width={500} height={300} />
          </div>
        </div>
      </div>
    </>
  );
}
