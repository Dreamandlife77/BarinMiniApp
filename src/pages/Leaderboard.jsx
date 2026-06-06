import { useState } from "react";
import BottomNav from "../components/BottomNav";

import aria from "../assets/characters/aria.png";
import kaveh from "../assets/characters/kaveh.png";
import sara from "../assets/characters/sara.png";
import daniyar from "../assets/characters/daniyar.png";
import mahsa from "../assets/characters/mahsa.png";
import rostam from "../assets/characters/rostam.png";
import shayan from "../assets/characters/shayan.png";
import layla from "../assets/characters/layla.png";
import ana from "../assets/characters/ana.png";
import nila from "../assets/characters/nila.png";

const leaderboardData = {
  weekly: {
    topThree: [
      {
        rank: 2,
        name: "Kaveh",
        xp: 9850,
        avatar: kaveh,
      },
      {
        rank: 1,
        name: "Aria",
        xp: 12650,
        avatar: aria,
      },
      {
        rank: 3,
        name: "Sara",
        xp: 8420,
        avatar: sara,
      },
    ],

    rankings: [
      {
        rank: 4,
        name: "Daniyar",
        xp: 6250,
        avatar: daniyar,
      },
      {
        rank: 5,
        name: "Mahsa",
        xp: 5420,
        avatar: mahsa,
      },
      {
        rank: 6,
        name: "Rostam",
        xp: 4900,
        avatar: rostam,
      },
      {
        rank: 7,
        name: "Shayan",
        xp: 4200,
        avatar: shayan,
      },
      {
        rank: 8,
        name: "Layla",
        xp: 3950,
        avatar: layla,
      },
      {
        rank: 9,
        name: "Ana",
        xp: 3720,
        avatar: ana,
      },
      {
        rank: 10,
        name: "Nila",
        xp: 3410,
        avatar: nila,
      },
    ],
  },

  monthly: {
    topThree: [
      {
        rank: 2,
        name: "Sara",
        xp: 25200,
        avatar: sara,
      },
      {
        rank: 1,
        name: "Aria",
        xp: 31400,
        avatar: aria,
      },
      {
        rank: 3,
        name: "Kaveh",
        xp: 22900,
        avatar: kaveh,
      },
    ],

    rankings: [
      {
        rank: 4,
        name: "Mahsa",
        xp: 18200,
        avatar: mahsa,
      },
      {
        rank: 5,
        name: "Daniyar",
        xp: 17100,
        avatar: daniyar,
      },
      {
        rank: 6,
        name: "Shayan",
        xp: 14900,
        avatar: shayan,
      },
      {
        rank: 7,
        name: "Rostam",
        xp: 13800,
        avatar: rostam,
      },
      {
        rank: 8,
        name: "Layla",
        xp: 12900,
        avatar: layla,
      },
      {
        rank: 9,
        name: "Ana",
        xp: 11850,
        avatar: ana,
      },
      {
        rank: 10,
        name: "Nila",
        xp: 10900,
        avatar: nila,
      },
    ],
  },

  alltime: {
    topThree: [
      {
        rank: 2,
        name: "Kaveh",
        xp: 98650,
        avatar: kaveh,
      },
      {
        rank: 1,
        name: "Aria",
        xp: 126500,
        avatar: aria,
      },
      {
        rank: 3,
        name: "Sara",
        xp: 84200,
        avatar: sara,
      },
    ],

    rankings: [
      {
        rank: 4,
        name: "Daniyar",
        xp: 76250,
        avatar: daniyar,
      },
      {
        rank: 5,
        name: "Mahsa",
        xp: 65420,
        avatar: mahsa,
      },
      {
        rank: 6,
        name: "Rostam",
        xp: 54900,
        avatar: rostam,
      },
      {
        rank: 7,
        name: "Shayan",
        xp: 44200,
        avatar: shayan,
      },
      {
        rank: 8,
        name: "Layla",
        xp: 39800,
        avatar: layla,
      },
      {
        rank: 9,
        name: "Ana",
        xp: 36200,
        avatar: ana,
      },
      {
        rank: 10,
        name: "Nila",
        xp: 33150,
        avatar: nila,
      },
    ],
  },
};

export default function Leaderboard() {
  const [period, setPeriod] =
    useState("weekly");

  const currentData =
    leaderboardData[period];

  const topThree =
    currentData.topThree;

  const rankings =
    currentData.rankings;

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      {/* Tabs */}

      <div className="px-4 pt-4">

        <div
          className="
            bg-slate-900
            rounded-2xl
            p-1
            flex
          "
        >
          {[
            "weekly",
            "monthly",
            "alltime",
          ].map((tab) => (

            <button
              key={tab}
              onClick={() =>
                setPeriod(tab)
              }
              className={`
                flex-1
                py-2
                rounded-xl
                font-medium

                ${
                  period === tab
                    ? "bg-yellow-500 text-black"
                    : "text-slate-400"
                }
              `}
            >
              {tab === "alltime"
                ? "All Time"
                : tab.charAt(0).toUpperCase() +
                  tab.slice(1)}
            </button>

          ))}
        </div>

      </div>

      {/* Top 3 */}

      <div
        className="
          flex
          items-end
          justify-center
          gap-3
          mt-10
          px-4
        "
      >

        <TopCard
          {...topThree[0]}
          size="small"
        />

        <TopCard
          {...topThree[1]}
          size="large"
        />

        <TopCard
          {...topThree[2]}
          size="small"
        />

      </div>

      {/* Ranking List */}

      <div className="px-4 mt-8 space-y-3">

        {rankings.map((player) => (

          <div
            key={player.rank}
            className="
              bg-slate-900
              rounded-2xl
              p-3
              flex
              items-center
            "
          >
            <div className="text-white w-8">
              {player.rank}
            </div>

            <img
              src={player.avatar}
              alt=""
              className="
                w-10
                h-10
                rounded-full
                object-cover
              "
            />

            <div className="ml-3 flex-1">

              <div className="text-white">
                {player.name}
              </div>

            </div>

            <div className="text-slate-300">
              {player.xp.toLocaleString()} XP
            </div>

          </div>

        ))}

      </div>

      <div
        className="
          text-center
          text-slate-400
          text-sm
          mt-8
        "
      >
        ⏳ Resets in: 3d 12h 45m
      </div>

      <BottomNav />

    </div>
  );
}

function TopCard({
  avatar,
  name,
  xp,
  rank,
  size,
}) {
  const isFirst = rank === 1;

  const medals = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
  };

  return (
    <div className="flex flex-col items-center">

      <div
        className={`
          relative
          rounded-3xl
          bg-slate-900
          p-3
          border

          ${
            isFirst
              ? "border-yellow-500"
              : "border-slate-700"
          }

          ${
            size === "large"
              ? "w-36 h-52"
              : "w-28 h-40"
          }
        `}
      >

        <div
          className="
            absolute
            -top-6
            left-1/2
            -translate-x-1/2
            text-3xl
          "
        >
          {medals[rank]}
        </div>

        <img
          src={avatar}
          alt=""
          className="
            w-20
            h-20
            mx-auto
            rounded-full
            object-cover
          "
        />

        <div className="text-center mt-3">

          <div className="text-white font-bold">
            {name}
          </div>

          <div className="text-slate-300 text-sm mt-1">
            {xp.toLocaleString()} XP
          </div>

        </div>

      </div>

    </div>
  );
}