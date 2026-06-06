import MissionCard from "./MissionCard";

export default function MissionsTab({
  expert,
}) {

  const missions =
    getMissionsByRole(expert.role);

  return (
    <div className="space-y-3">

      {missions.map((mission, index) => (

        <MissionCard
          key={index}
          mission={mission}
        />

      ))}

    </div>
  );
}

function getMissionsByRole(role) {

  const data = {

    Geologist: [
      {
        title: "Mineral Identification",
        description:
          "Write a post about hematite or magnetite",
        reward: "30 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Deposit Mapping",
        description:
          "Share BARIN mine infographic on Telegram",
        reward: "25 BARIN",
        platform: "Telegram",
      },
      {
        title: "Digital Explorer",
        description:
          "Refer a new member to BARIN community",
        reward: "35 BARIN",
        platform: "Telegram",
      },
      {
        title: "Exploration Report",
        description:
          "Answer weekly technical question",
        reward: "40 BARIN",
        platform: "Telegram",
      },
    ],

    Geophysicist: [
      {
        title: "Aerial Map",
        description:
          "Explain aerial vs ground exploration methods",
        reward: "35 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Signal Detection",
        description:
          "Write thread about AI in mineral exploration",
        reward: "45 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Global Coverage",
        description:
          "Introduce BARIN to English-speaking group",
        reward: "40 BARIN",
        platform: "International",
      },
      {
        title: "Data Analysis",
        description:
          "Create short video about BARIN technical data",
        reward: "50 BARIN",
        platform: "Telegram",
      },
    ],

    "Mining Engineer": [
      {
        title: "Pit Design",
        description:
          "Explain open-pit vs underground mining",
        reward: "40 BARIN",
        platform: "Telegram",
      },
      {
        title: "Controlled Blast",
        description:
          "Write post with #BarinMining about extraction",
        reward: "45 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Digital Modeling",
        description:
          "Create infographic of extraction phases",
        reward: "55 BARIN",
        platform: "Telegram",
      },
      {
        title: "Team Building",
        description:
          "Refer 3 new members",
        reward: "60 BARIN",
        platform: "Telegram",
      },
    ],

    "Process Engineer": [
      {
        title: "Digital Crushing",
        description:
          "Explain raw ore vs concentrate",
        reward: "50 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Quality Testing",
        description:
          "Answer technical processing question",
        reward: "60 BARIN",
        platform: "Telegram",
      },
      {
        title: "Plant Design",
        description:
          "Create processing infographic",
        reward: "70 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Sustainable Processing",
        description:
          "Write about ESG approach",
        reward: "55 BARIN",
        platform: "X (Twitter)",
      },
    ],

    "Commerce Director": [
      {
        title: "Digital Export",
        description:
          "Introduce BARIN to 2 groups",
        reward: "70 BARIN",
        platform: "International",
      },
      {
        title: "EV Market Analysis",
        description:
          "Explain minerals in EV industry",
        reward: "65 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "Blockchain in Export",
        description:
          "Write blockchain export thread",
        reward: "80 BARIN",
        platform: "X (Twitter)",
      },
      {
        title: "BARIN Ambassador",
        description:
          "Produce article or podcast",
        reward: "100 BARIN",
        platform: "Any Platform",
      },
    ],
  };

  return data[role] || [];
}