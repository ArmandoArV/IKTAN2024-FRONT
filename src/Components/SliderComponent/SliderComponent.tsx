"use client";

import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { StaticImageData } from "next/image";

interface SliderProps {
  images: StaticImageData[];
  slideInterval?: number;
}

const SliderComponent: React.FC<SliderProps> = ({
  images,
  slideInterval = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, slideInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, slideInterval]);

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        <img src={images[currentImageIndex].src} alt="Slider image" />
      </div>
    </div>
  );
};

export default SliderComponent;
