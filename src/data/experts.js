import kaveh from "../assets/characters/kaveh.png";
import kavehdetail from "../assets/characters/kavehdetail.png";
import aria from "../assets/characters/aria.png";
import ariadetail from "../assets/characters/ariadetail.png";
import rostam from "../assets/characters/rostam.png";
import rostamdetail from "../assets/characters/rostamdetail.png";
import daniyar from "../assets/characters/daniyar.png";
import daniyardetail from "../assets/characters/daniyardetail.png";
import shayan from "../assets/characters/shayan.png";
import shayandetail from "../assets/characters/shayandetail.png";

import sara from "../assets/characters/sara.png";
import saradetail from "../assets/characters/saradetail.png";
import nila from "../assets/characters/nila.png";
import niladetail from "../assets/characters/niladetail.png";
import ana from "../assets/characters/ana.png";
import anadetail from "../assets/characters/anadetail.png";
import mahsa from "../assets/characters/mahsa.png";
import mahsadetail from "../assets/characters/mahsadetail.png";
import layla from "../assets/characters/layla.png";
import layladetail from "../assets/characters/layladetail.png";
import bridgeEngineering from "../assets/educational/bridge.png";
import construction from "../assets/educational/construction.png";
import solarCells from "../assets/educational/solar.png";
import evBatteries from "../assets/educational/batteries.png";
import cleanEnergy from "../assets/educational/energy.png";

export const experts = [
  {
    id: 1,
    name: "Kaveh",
    role: "Geologist",
    phase: "Exploration - Phase 1",
    level: 3,
    currentXP: 180,
    maxXP: 300,
    color: "#EAB308",
    avatar: kaveh,
    avatardetail: kavehdetail,
    quote: "The earth never lies — you just need to know where to listen",
    tools: [
    {
      icon: "⛏️",
      name: "Rock Hammer",
    },
    {
      icon: "🔍",
      name: "Magnifying Glass",
    },
    {
      icon: "🗺️",
      name: "Geological Maps",
    },
    {
      icon: "🧪",
      name: "Sample Analysis Kit",
    },
  ],

  education: {
  title: "Bridge Engineering",
  image: bridgeEngineering,

  minerals: [
    "Iron",
    "Silica",
    "Copper",
  ],

  fact:
    "Golden Gate Bridge uses 83,000 tons of steel.",

  connection:
    "BARIN hematite feeds directly into steel supply chain.",

  color: "#F97316",
}
  },

  {
    id: 2,
    name: "Aria",
    role: "Geophysicist",
    phase: "Exploration - Phase 1",
    level: 2,
    currentXP: 140,
    maxXP: 350,
    color: "#06B6D4",
    avatar: aria,
    avatardetail: ariadetail,
    quote: "Data is my compass — every signal hides a secret",
    tools: [
  {
    icon: "🛰️",
    name: "Satellite Data",
  },
  {
    icon: "📡",
    name: "Magnetic Field Sensors",
  },
  {
    icon: "📱",
    name: "Digital Tablet",
  },
  {
    icon: "🎧",
    name: "Headset",
  },
],
education: {
  title: "Clean Energy",
  image: cleanEnergy,

  minerals: [
    "Steel",
    "Rare Earth",
    "Lithium",
    "Copper",
  ],

  fact:
    "Clean energy uses 6x more minerals than fossil fuels.",

  connection:
    "BARIN sits at the core of the global clean energy transition.",

  color: "#06B6D4",
}
  },

  {
    id: 3,
    name: "Rostam",
    role: "Mining Engineer",
    phase: "Extraction - Phase 2",
    level: 1,
    currentXP: 80,
    maxXP: 500,
    color: "#F97316",
    avatar: rostam,
    avatardetail: rostamdetail,
    quote: "I design the mountain — before I move it",
    tools: [
  {
    icon: "📐",
    name: "Drill Blueprints",
  },
  {
    icon: "💻",
    name: "Pit Design Software",
  },
  {
    icon: "🚜",
    name: "Heavy Machinery",
  },
  {
    icon: "🧨",
    name: "Explosives Plan",
  },
],

education: {
  title: "Construction",
  image: construction,

  minerals: [
    "Steel",
    "Aluminium",
    "Copper",
    "Gypsum",
  ],

  fact:
    "Average home uses 2-5 tons of steel.",

  connection:
    "Construction is the world's largest consumer of iron ore.",

  color: "#F97316",
}
  },

  {
    id: 4,
    name: "Daniyar",
    role: "Process Engineer",
    phase: "Processing - Phase 3",
    level: 1,
    currentXP: 60,
    maxXP: 600,
    color: "#22C55E",
    avatar: daniyar,
    avatardetail: daniyardetail,
    quote: "Raw ore is the input — pure product is my art",
    tools: [
  {
    icon: "⚗️",
    name: "Mineral Concentrate Flask",
  },
  {
    icon: "📋",
    name: "Clipboard",
  },
  {
    icon: "🥼",
    name: "Lab Coat",
  },
  {
    icon: "🪖",
    name: "Green Safety Helmet",
  },
],
education: {
  title: "Solar Cells",
  image: solarCells,

  minerals: [
    "Silicon",
    "Silver",
    "Copper",
  ],

  fact:
    "95% of solar panels use pure silicon.",

  connection:
    "BARIN supports the clean energy supply chain upstream.",

  color: "#22C55E",
}
  },

  {
    id: 5,
    name: "Shayan",
    role: "Commerce Director",
    phase: "Sales & Export - Phase 4",
    level: 1,
    currentXP: 40,
    maxXP: 800,
    color: "#A855F7",
    avatar: shayan,
    avatardetail: shayandetail,
    quote: "Every shipment is a covenant — every blockchain a proof",
    tools: [
  {
    icon: "💼",
    name: "Briefcase",
  },
  {
    icon: "🌍",
    name: "World Map",
  },
  {
    icon: "🚢",
    name: "Cargo Ships",
  },
  {
    icon: "📈",
    name: "Global Market Analysis",
  },
],
education: {
  title: "EV Batteries",
  image: evBatteries,

  minerals: [
    "Lithium",
    "Nickel",
    "Cobalt",
    "Copper",
  ],

  fact:
    "By 2030 the world will need 40x more lithium.",

  connection:
    "BARIN sits directly in the EV manufacturer supply chain.",

  color: "#A855F7",
}
  },
  {
    id: 6,
    name: "Sara",
    role: "Geologist",
    phase: "Exploration - Phase 1",
    level: 2,
    currentXP: 150,
    maxXP: 300,
    color: "#EAB308",
    avatar: sara,
    avatardetail: saradetail,
    quote: "The earth never lies — you just need to know where to listen",
    tools: [
    {
      icon: "⛏️",
      name: "Rock Hammer",
    },
    {
      icon: "🔍",
      name: "Magnifying Glass",
    },
    {
      icon: "🗺️",
      name: "Geological Maps",
    },
    {
      icon: "🧪",
      name: "Sample Analysis Kit",
    },
  ],
  education: {
  title: "Bridge Engineering",
  image: bridgeEngineering,

  minerals: [
    "Iron",
    "Silica",
    "Copper",
  ],

  fact:
    "Golden Gate Bridge uses 83,000 tons of steel.",

  connection:
    "BARIN hematite feeds directly into steel supply chain.",

  color: "#F97316",
}
  },

  {
    id: 7,
    name: "Nila",
    role: "Geophysicist",
    phase: "Exploration - Phase 1",
    level: 3,
    currentXP: 170,
    maxXP: 350,
    color: "#06B6D4",
    avatar: nila,
    avatardetail: niladetail,
    quote: "Data is my compass — every signal hides a secret",
    tools: [
  {
    icon: "🛰️",
    name: "Satellite Data",
  },
  {
    icon: "📡",
    name: "Magnetic Field Sensors",
  },
  {
    icon: "📱",
    name: "Digital Tablet",
  },
  {
    icon: "🎧",
    name: "Headset",
  },
],
education: {
  title: "Clean Energy",
  image: cleanEnergy,

  minerals: [
    "Steel",
    "Rare Earth",
    "Lithium",
    "Copper",
  ],

  fact:
    "Clean energy uses 6x more minerals than fossil fuels.",

  connection:
    "BARIN sits at the core of the global clean energy transition.",

  color: "#06B6D4",
}
  },

  {
    id: 8,
    name: "Ana",
    role: "Mining Engineer",
    phase: "Extraction - Phase 2",
    level: 1,
    currentXP: 30,
    maxXP: 500,
    color: "#F97316",
    avatar: ana,
    avatardetail: anadetail,
    quote: "I design the mountain — before I move it",
    tools: [
  {
    icon: "📐",
    name: "Drill Blueprints",
  },
  {
    icon: "💻",
    name: "Pit Design Software",
  },
  {
    icon: "🚜",
    name: "Heavy Machinery",
  },
  {
    icon: "🧨",
    name: "Explosives Plan",
  },
],

education: {
  title: "Construction",
  image: construction,

  minerals: [
    "Steel",
    "Aluminium",
    "Copper",
    "Gypsum",
  ],

  fact:
    "Average home uses 2-5 tons of steel.",

  connection:
    "Construction is the world's largest consumer of iron ore.",

  color: "#F97316",
}
  },

  {
    id: 9,
    name: "Mahsa",
    role: "Process Engineer",
    phase: "Processing - Phase 3",
    level: 1,
    currentXP: 20,
    maxXP: 600,
    color: "#22C55E",
    avatar: mahsa,
    avatardetail: mahsadetail,
    quote: "Raw ore is the input — pure product is my art",
    tools: [
  {
    icon: "⚗️",
    name: "Mineral Concentrate Flask",
  },
  {
    icon: "📋",
    name: "Clipboard",
  },
  {
    icon: "🥼",
    name: "Lab Coat",
  },
  {
    icon: "🪖",
    name: "Green Safety Helmet",
  },
],
education: {
  title: "Solar Cells",
  image: solarCells,

  minerals: [
    "Silicon",
    "Silver",
    "Copper",
  ],

  fact:
    "95% of solar panels use pure silicon.",

  connection:
    "BARIN supports the clean energy supply chain upstream.",

  color: "#22C55E",
}
  },

  {
    id: 10,
    name: "Layla",
    role: "Commerce Director",
    phase: "Sales & Export - Phase 4",
    level: 1,
    currentXP: 50,
    maxXP: 800,
    color: "#A855F7",
    avatar: layla,
    avatardetail:layladetail,
    quote: "Every shipment is a covenant — every blockchain a proof",
    tools: [
  {
    icon: "💼",
    name: "Briefcase",
  },
  {
    icon: "🌍",
    name: "World Map",
  },
  {
    icon: "🚢",
    name: "Cargo Ships",
  },
  {
    icon: "📈",
    name: "Global Market Analysis",
  },
],
education: {
  title: "EV Batteries",
  image: evBatteries,

  minerals: [
    "Lithium",
    "Nickel",
    "Cobalt",
    "Copper",
  ],

  fact:
    "By 2030 the world will need 40x more lithium.",

  connection:
    "BARIN sits directly in the EV manufacturer supply chain.",

  color: "#A855F7",
}
  },
];