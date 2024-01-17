"use client";
import React, { useState } from "react";
import LightComponent from "../LightComponent/LightComponent";
import styles from "./ComponenteLuz.module.css";
import { StaticImageData } from "next/image";
import encendida from "@/Images/encendida.png";
import apagada from "@/Images/apagada.png";
import TurnOn from "../TurnOnComponent/TurnOn";

interface ImagesDictionary {
  [key: string]: StaticImageData;
}

const LightMeasure: React.FC = () => {
  const imagenes: ImagesDictionary = {
    img5: encendida,
    img6: apagada,
  };

  const [isEncendido, setEncendido] = useState<boolean>(false);
  const [imagenLuz, setImagen] = useState<StaticImageData>(imagenes.img5);

  const setLuz = () => {
    setEncendido((prev) => !prev);
    setImagen((prevImagen) =>
      prevImagen === imagenes.img5 ? imagenes.img6 : imagenes.img5
    );
  };

  return (
    <div className={styles.contenedorComponenteLuz}>
      <div className={styles.topContainer}>
        <LightComponent imagen={imagenLuz} isOn={isEncendido} />
      </div>
      <div className={styles.bottomContainer}>
        <TurnOn
          funcionalidad={setLuz}
          texto={isEncendido ? "ENCENDER" : "APAGAR"}
          isEncendido={isEncendido}
        />
      </div>
    </div>
  );
};

export default LightMeasure;
