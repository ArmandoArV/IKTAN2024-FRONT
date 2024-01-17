import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./lightComponent.module.css";

interface LightComponentProps {
  isOn: boolean;
  imagen: StaticImageData;
}

const LightComponent: React.FC<LightComponentProps> = ({ isOn, imagen }) => {
  return (
    <div className={styles.luzContainer}>
      <img className={isOn ? styles.isOn : ""} src={imagen.src} alt="light" />
    </div>
  );
};

export default LightComponent;
