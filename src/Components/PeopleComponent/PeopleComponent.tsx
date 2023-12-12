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
      <div className={styles.top} id={props.id}>
        <img src={props.image?.src} alt={props.name} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomTop}>
          <h1>{props.name}</h1>
        </div>
        <div className={styles.bottomBottom}>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
  );
}
