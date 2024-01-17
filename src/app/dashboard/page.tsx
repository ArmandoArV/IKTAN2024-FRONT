"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import LightMeasure from "@/Components/LightMeasureContainer/LightMeasure";
import MySVG from "@/Components/SVGComponent/SVGComponent";
import { temperatureValues } from "@/Constants";

export default function Home() {
  const [getTemperature, setTemperture] = useState<number>(31);
  const getTemperatureIconName = () => {
    switch (true) {
      case getTemperature > temperatureValues.high:
        return "temperature-high";
      case getTemperature > temperatureValues.medium:
        return "temperature-half";
      default:
        return "temperature-low";
    }
  };
  const getTemperatureTextColor = () => {
    switch (true) {
      case getTemperature > 40:
        return "red";
      case getTemperature > 30:
        return "orange";
      default:
        return "black";
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.topContainerCamera}>
            <img
              className={styles.camera}
              src="http://50.197.223.170/mjpg/video.mjpg"
              alt="camera"
            />
          </div>
          <div className={styles.bottomContainer}></div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.topContainer}>
            <LightMeasure />
          </div>
          <div className={styles.middleContainer}>
            <div className={styles.middleLeftContainer}>
              <MySVG
                nameClass={styles.temperatureIcon}
                name={getTemperatureIconName()}
                color={getTemperatureTextColor()}
              />
            </div>
            <div className={styles.middleRightContainer}>
              <div className={styles.temperatureTextContainer}>
                <h1
                  className={styles.temperature}
                  style={{ color: getTemperatureTextColor() }}
                >
                  {getTemperature}°C
                </h1>
              </div>
              <div className={styles.temperatureSliderContainer}></div>
            </div>
          </div>
          <div className={styles.bottomContainer}></div>
        </div>
      </div>
    </main>
  );
}
