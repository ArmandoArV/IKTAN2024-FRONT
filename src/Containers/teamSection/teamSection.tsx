import styles from "./teamSection.module.css";
import PeopleComponent from "@/Components/PeopleComponent/PeopleComponent";
import Bernardo from "../../Images/Bernardo.jpg";
import David from "../../Images/David.jpg";
import Dani from "../../Images/Dani.jpg";
import Image from "next/image";
import TeamPic from "../../Images/TeamPic.png";
import { peopleInfo } from "@/Constants";
import SliderComponent from "@/Components/SliderComponent/SliderComponent";
import slider0 from "../../Images/slider0.webp";
import slider1 from "../../Images/slider1.jpg";
import slider2 from "../../Images/slider2.jpg";
import slider3 from "../../Images/slider3.jpg";
import slider4 from "../../Images/slider4.jpg";

import slider6 from "../../Images/slider6.jpg";
import slider7 from "../../Images/slider7.jpg";
import slider8 from "../../Images/slider8.jpg";
import slider9 from "../../Images/slider9.jpg";
import slider10 from "../../Images/slider10.jpeg";
import slider11 from "../../Images/slider11.jpg";
import slider12 from "../../Images/slider12.jpg";

export default function TeamSection() {
  const images = [
    TeamPic,
    slider0,
    slider1,
    slider2,
    slider3,
    slider4,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
  ];
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
          <SliderComponent images={images} slideInterval={3000} />
        </div>
      </div>
    </>
  );
}
