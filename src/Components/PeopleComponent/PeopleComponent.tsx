import React from "react";
import { StaticImageData } from "next/image";
import styles from "./People.module.css";
interface PeopleComponentProps {
  name: string;
  position: string;
  image?: StaticImageData;
  id?: string;
}

export default function PeopleComponent(props: PeopleComponentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left} id={props.id}>
        <div className={styles.imgContainer}>
          <img src={props.image?.src} alt={props.name} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.rightBottom}>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
  );
}
