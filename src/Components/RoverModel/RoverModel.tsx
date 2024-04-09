"use client";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Mesh } from "three";
import styles from "./RoverModel.module.css";

function ShibaMesh() {
  const mesh = useRef<Mesh>(null!);
  const fileUrl = "/Models/Rover.gltf";
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });

  return <mesh ref={mesh}>{gltf && <primitive object={gltf.scene} />}</mesh>;
}

export function RoverModel() {
  return (
    <div className={styles.container}>
      Use Left and Right click to interact!
      <Canvas className={styles.canvas}>
        
        <ShibaMesh />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
