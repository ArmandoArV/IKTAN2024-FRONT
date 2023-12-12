interface navItems {
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
export const navItems: navItems[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Challenge",
    path: "/challenge",
  },
  {
    name: "Achievements",
    path: "/achievements",
  },
  {
    name: "Sponsors",
    path: "/sponsors",
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
