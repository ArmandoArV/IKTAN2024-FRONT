"use client"
import React from "react";
import "./DashboardNotification.css";
import foto from "@/Images/tec1.jpg";
import Image from "next/image";
import { useRouter,usePathname  } from 'next/navigation'

function DashboardNotification() {

    const router = useRouter();

    const handeClick = () => {
        router.push("/dashboard");
    }

  return (
    <div className="image-text-container" onClick={handeClick}>
      <div className="live-text">LIVE</div>
      <Image src={foto} alt="Picture of the author" style={{
        "borderRadius": "5%",
        "border": "5px solid red",
      }} 
      width={foto.width/2.5}/>
      <div className="under-text">COME LOOK AT US LIVE</div>
    </div>
  );
}

export default DashboardNotification;
