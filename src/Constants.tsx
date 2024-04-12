interface navItems {
  id: number;
  name: string;
  path: string;
}

interface socialMedia {
  name: string;
  url: string;
  fa_icon?: string;
}

interface PeopleInfo {
  [key: string]: {
    name: string;
    position: string;
  };
}

interface Sponsor {
  name: string;
  logo: StaticImageData;
  url: string;
}

interface temperatureValues {
  [key: string]: number;
}

export interface AchievementComponentProps {
  achievementImage: string;
  achievementTitle: string;
  achievementYear?: string;
}

export const API_URL = "http://api.iktanroving.org"

export const navItems: navItems[] = [
  {
    id: 0,
    name: "IktanRoving",
    path: "landing",
  },
  {
    id: 1,
    name: "Team",
    path: "team",
  },
  {
    id: 2,
    name: "Challenge",
    path: "challenge",
  },
  {
    id: 3,
    name: "Achievements",
    path: "achievements",
  },
];

export const socialMedia: socialMedia[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/IKTANRoving/",
    fa_icon: "fab fa-facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iktan_roving/",
    fa_icon: "fab fa-instagram",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@iktan_roving",
    fa_icon: "fab fa-tiktok",
  },
];

export const peopleInfo: PeopleInfo = {
  Dani: {
    name: "Daniela Espinosa",
    position: "Team Leader",
  },
  David: {
    name: "David García",
    position: "Team Advisor",
  },
  Bernardo: {
    name: "Bernardo Salgado",
    position: "Safety Officer",
  },
};

export const temperatureValues: temperatureValues = {
  "temperature-high": 40,
  "temperature-half": 30,
  "temperature-low": 20,
};


import achievement1 from "@/Images/achievement1.jpeg";
import achievement2 from "@/Images/achievement2.jpeg";
import achievement3 from "@/Images/achievement3.jpeg";
import achievement4 from "@/Images/achievement4.jpeg";
import achievement5 from "@/Images/achievement5.jpeg";
import achievement6 from "@/Images/achievement6.jpeg";
import achievement7 from "@/Images/achievement7.jpeg";
import achievement8 from "@/Images/achievement8.jpeg";
import achievement9 from "@/Images/achievement9.jpeg";
import achievement10 from "@/Images/achievement10.jpeg";
import achievement11 from "@/Images/achievement11.jpeg";
import achievement12 from "@/Images/achievement12.jpeg";
import achievement13 from "@/Images/achievement13.jpeg";

export const achievements: AchievementComponentProps[] = [
  {
    achievementImage: achievement1.src,
    achievementTitle: "Team Participation",
    achievementYear: "",
  },
  {
    achievementImage: achievement2.src,
    achievementTitle: "Team Participation",
    achievementYear: "April 2014",
  },
  {
    achievementImage: achievement3.src,
    achievementTitle: "Team Participation",
    achievementYear: "April 2015",
  },
  {
    achievementImage: achievement5.src,
    achievementTitle: "Team Participation",
    achievementYear: "2016",
  },
  {
    achievementImage: achievement6.src,
    achievementTitle: "Team Participation",
    achievementYear: "2017",
  },
  {
    achievementImage: achievement7.src,
    achievementTitle: "Team Participation",
    achievementYear: "2018",
  },
  {
    achievementImage: achievement8.src,
    achievementTitle: "Jesco Von Puttkamer Award ",
    achievementYear: "2019",
  },
  {
    achievementImage: achievement9.src,
    achievementTitle: "Crash and Burn Award",
    achievementYear: "2020",
  },
  {
    achievementImage: achievement10.src,
    achievementTitle: "Telemetry Award",
    achievementYear: "2020",
  },
  {
    achievementImage: achievement11.src,
    achievementTitle: "2nd Place Winner",
    achievementYear: "2021",
  },
  {
    achievementImage: achievement12.src,
    achievementTitle: "1st Place Award",
    achievementYear: "2022",
  },
  {
    achievementImage: achievement13.src,
    achievementTitle: "Ingenuity Award",
    achievementYear: "2023",
  },

];


import femsa from "@/Images/FEMSA.png";
import wurth from "@/Images/Wurth_logo.png";  
import jufusa from "@/Images/Jufusa.png";
import netLogistiK from "@/Images/netLogitiK.png";      
import baxter from "@/Images/Baxter.png";
import { StaticImageData } from "next/image";
export const sponsors: Sponsor[] = [
  
  {
    name: "Wurth",
    logo: wurth,
    url: "https://www.tiendawurth.com.mx/",
  },
  {
    name: "Jufusa",
    logo: jufusa,
    url: "https://www.jufusa.com.mx/",
  },
  {
    name: "Net LogistiK",
    logo: netLogistiK,
    url: "https://www.netlogistik.com/es/",
  },
  {
    name: "Baxter",
    logo: baxter,
    url: "https://www.baxter.mx/es/quienes-somos/baxter-mexico",
  },
  {
    name: "FEMSA",
    logo: femsa,
    url: "https://www.femsa.com/",
  },
];
