interface navItems {
  id: number;
  name: string;
  path: string;
}

interface socialMedia {
  name: string;
  url: string;
}

interface PeopleInfo {
  [key: string]: {
    name: string;
    position: string;
  };
}

interface temperatureValues {
  [key: string]: number;
}

export const navItems: navItems[] = [
  {
    id: 0,
    name: "Home",
    path: "/",
  },
  {
    id: 1,
    name: "Team",
    path: "/team",
  },
  {
    id: 2,
    name: "Challenge",
    path: "/challenge",
  },
  {
    id: 3,
    name: "Achievements",
    path: "/achievements",
  },
  {
    id: 4,
    name: "Sponsors",
    path: "/sponsors",
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 6,
    name: "Competition",
    path: "/competition",
  },
];

export const socialMedia: socialMedia[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/IKTANRoving/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iktan_roving/",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@iktan_roving",
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
