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

  const [getTemperatureData, setTemperatureData] = useState<number[]>([]);
  const [getTemperatureLabels, setTemperatureLabels] = useState<string[]>([]);

  const [getAngsData, setAngsData] = useState<number[]>([]);
  const [getAngsLabels, setAngsLabels] = useState<string[]>([]);

  const [getAmbienceLightData, setAmbienceLightData] = useState<number[]>([]);
  const [getAmbienceLightLabels, setAmbienceLightLabels] = useState<string[]>(
    []
  );

  const [getHumidityData, setHumidityData] = useState<number[]>([]);
  const [getHumidityLabels, setHumidityLabels] = useState<string[]>([]);

  const [getVibrationData, setVibrationData] = useState<number[]>([]);
  const [getVibrationLabels, setVibrationLabels] = useState<string[]>([]);

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
      const response = await fetch(`${API_URL}/rover/allAccelerations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.Accel);
      });
      setAccelerationData(values);
      setAccelerationLabels(labels);
    } catch (error) {
      console.error("Error fetching acceleration data:", error);
    }
  };

  const fetchTemperature = async () => {
    try {
      const response = await fetch(`${API_URL}/tool/allTemperatures`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.temperature);
      });
      setTemperatureData(values);
      setTemperatureLabels(labels);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  const fetchAngs = async () => {
    try {
      const response = await fetch(`${API_URL}/rover/allAngs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.AngRate);
      });
      setAngsData(values);
      setAngsLabels(labels);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  const fetchAmbienceLight = async () => {
    try {
      const response = await fetch(`${API_URL}/tool/allAmbienceLight`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.ambienceLight);
      });
      setAmbienceLightData(values);
      setAmbienceLightLabels(labels);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  const fetchHumidity = async () => {
    try {
      const response = await fetch(`${API_URL}/tool/allHumidities`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.humidity);
      });
      setHumidityData(values);
      setHumidityLabels(labels);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  const fetchVibration = async () => {
    try {
      const response = await fetch(`${API_URL}/rover/allVibrations`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      const labels: string[] = [];
      const values: number[] = [];
      data.forEach((element: any) => {
        labels.push(element.createdAt);
        values.push(element.vibration);
      });
      setVibrationData(values);
      setVibrationLabels(labels);
    } catch (error) {
      console.error("Error fetching temperature data:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAccelerationData();
      fetchTemperature();
      fetchAngs();
      fetchAmbienceLight();
      fetchHumidity();
      fetchVibration();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.leftContainer}>
        <div className={styles.topCharts}>
          <ChartComponent
            data={accelerationData}
            labels={accelerationLabels}
            graphTitle="Acceleration"
            isFilled={true}
            chartType="line"
          />
          <ChartComponent
            data={getTemperatureData}
            labels={getTemperatureLabels}
            graphTitle="Temperature"
            isFilled={true}
            chartType="line"
          />
          <ChartComponent
            data={getAngsData}
            labels={getAngsLabels}
            graphTitle="Angs"
            isFilled={true}
            chartType="line"
          />
        </div>
        <div className={styles.bottomCharts}>
          <ChartComponent
            data={getAmbienceLightData}
            labels={getAmbienceLightLabels}
            graphTitle="Ambience Light"
            isFilled={true}
            chartType="line"
          />
          <ChartComponent
            data={getHumidityData}
            labels={getHumidityLabels}
            graphTitle="Humidity"
            isFilled={true}
            chartType="line"
          />
          <ChartComponent
            data={getVibrationData}
            labels={getVibrationLabels}
            graphTitle="Vibration"
            isFilled={true}
            chartType="line"
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.topContainer}></div>
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
    </main>
  );
}
