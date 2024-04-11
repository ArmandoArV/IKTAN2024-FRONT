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
