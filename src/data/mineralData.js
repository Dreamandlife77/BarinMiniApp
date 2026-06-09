import hematite from "../assets/minerals/Fe.png";
import copper from "../assets/minerals/Cu.png";
import lithium from "../assets/minerals/Li.png";
import nickel from "../assets/minerals/Ni.png";
import gold from "../assets/minerals/Au.png";

export const minerals = [
  {
    id: 1,
    name: {
      en: "Iron / Hematite",
      fa: "آهن / هماتیت",
    },
    rarity: {
      en: "Common",
      fa: "رایج",
    },
    symbol: "Fe",
    color: "#EF4444",
    reward: 10,
    hp: 300,
    image: hematite,
  },

  {
    id: 2,
    name: {
      en: "Copper",
      fa: "مس",
    },
    rarity: {
      en: "Common",
      fa: "رایج",
    },
    symbol: "Cu",
    color: "#F97316",
    reward: 15,
    hp: 400,
    image: copper,
  },

  {
    id: 3,
    name: {
      en: "Lithium",
      fa: "لیتیوم",
    },
    rarity: {
      en: "Uncommon",
      fa: "غیرمعمول",
    },
    symbol: "Li",
    color: "#22C55E",
    reward: 25,
    hp: 600,
    image: lithium,
  },

  {
    id: 4,
    name: {
      en: "Nickel",
      fa: "نیکل",
    },
    rarity: {
      en: "Uncommon",
      fa: "غیرمعمول",
    },
    symbol: "Ni",
    color: "#A855F7",
    reward: 20,
    hp: 500,
    image: nickel,
  },

  {
    id: 5,
    name: {
      en: "Gold",
      fa: "طلا",
    },
    rarity: {
      en: "Rare",
      fa: "کمیاب",
    },
    symbol: "Au",
    color: "#EAB308",
    reward: 50,
    hp: 800,
    image: gold,
  },
];