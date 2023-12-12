interface navItems {
  name: string;
  path: string;
}

interface socialMedia {
  name: string;
  url: string;
  icon: string;
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
    icon: "fa-facebook", // Corrected icon name
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/iktan_roving/",
    icon: "fa-instagram", // Corrected icon name
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@iktan_roving",
    icon: "fa-tiktok", // Corrected icon name
  },
];
