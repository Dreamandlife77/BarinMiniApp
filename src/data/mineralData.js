import hematite from "../assets/minerals/Fe.png";
import copper from "../assets/minerals/Cu.png";
import lithium from "../assets/minerals/Li.png";
import nickel from "../assets/minerals/Ni.png";
import gold from "../assets/minerals/Au.png";

export const minerals = [
  {
    id: 1,
    name: "Iron / Hematite",
    symbol: "Fe",
    rarity: "Common",
    color: "#EF4444",
    reward: 10,
    hp: 300,
    image: hematite,
  },

  {
    id: 2,
    name: "Copper",
    symbol: "Cu",
    rarity: "Common",
    color: "#F97316",
    reward: 15,
    hp: 400,
    image: copper,
  },

  {
    id: 3,
    name: "Lithium",
    symbol: "Li",
    rarity: "Uncommon",
    color: "#22C55E",
    reward: 25,
    hp: 600,
    image: lithium,
  },

  {
    id: 4,
    name: "Nickel",
    symbol: "Ni",
    rarity: "Uncommon",
    color: "#A855F7",
    reward: 20,
    hp: 500,
    image: nickel,
  },

  {
    id: 5,
    name: "Gold",
    symbol: "Au",
    rarity: "Rare",
    color: "#EAB308",
    reward: 50,
    hp: 800,
    image: gold,
  },
];