"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import LightMeasure from "@/Components/LightMeasureContainer/LightMeasure";
import MySVG from "@/Components/SVGComponent/SVGComponent";
import { temperatureValues } from "@/Constants";
import ChartComponent from "@/Components/ChartComponent/ChartComponent";
import { API_URL } from "@/Constants";

export default function Home() {
  const [getTemperature, setTemperture] = useState<number>(0);

  const [accelerationData, setAccelerationData] = useState<number[]>([]);

  const [accelerationLabels, setAccelerationLabels] = useState<string[]>([]);

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

  const fetchAccelerationData = async () => {
    try {
      const response = await fetch(`${API_URL}/rover/acceleration/0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.timestamp);
        values.push(element.value);
      });
      setAccelerationData(values);
      setAccelerationLabels(labels);
    } catch (error) {
      console.error("Error fetching acceleration data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAccelerationData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.topContainerCamera}>
            <img
              className={styles.camera}
              src="http://187.237.116.40:82/mjpg/video.mjpg"
              alt="camera"
            />
          </div>
          <div className={styles.bottomContainer}>
            <ChartComponent
              data={accelerationData}
              labels={accelerationLabels}
              graphTitle="Acceleration"
              isFilled={true}
              chartType="line"
            />
            <ChartComponent
              data={accelerationData}
              labels={accelerationLabels}
              graphTitle="Temperature"
              isFilled={true}
              chartType="line"
            />

          </div>
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
