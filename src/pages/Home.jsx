import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

import BottomNav from "../components/BottomNav";

import { experts } from "../data/experts";
import { minerals } from "../data/mineralData";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Home() {

  const navigate = useNavigate();

  const { id } = useParams();

  const currentExpert =
    experts.find(
      (e) => String(e.id) === String(id)
    ) || experts.find((e) => e.id === 1);

  const mineral =
    minerals.find((m) => m.id === 1);

  const energy = 80;

  const progress =
    (currentExpert.currentXP /
      currentExpert.maxXP) *
    100;

  return (
    <div className="min-h-screen bg-[#020617] pb-24">
      {/* Current Expert */}

    <div className="p-4 text-center">
        <button
          onClick={() =>
            navigate(-1)
          }
          className="
          absolute
          top-3
          left-3
          z-20
          w-10
          h-10
          rounded-full
          bg-yellow/50
          backdrop-blur
          flex
          items-center
          justify-center
          text-white
        "
      >
          <ArrowLeft />
        </button>
        <h1 className="text-white text-2xl font-bold">
          Home
        </h1>

      </div>

      <div className="px-4">

        <div
          className="
            bg-slate-900
            rounded-2xl
            p-4
          "
        >

          <div className="flex gap-4">

            <img
              src={currentExpert.avatar}
              alt=""
              className="
                w-30
                h-30
                rounded-full
              "
            />

            <div className="flex-1">

              <div className="text-slate-400">
                Current Expert
              </div>

              <div className="text-white text-2xl font-bold">
                {currentExpert.name}
              </div>

              <div
                style={{
                  color:
                    currentExpert.color,
                }}
                className="font-semibold"
              >
                {currentExpert.role}
              </div>

              <div className="mt-2 flex justify-between">

                <span className="text-white">
                  Level {currentExpert.level}
                </span>

                <span className="text-slate-400">
                  {currentExpert.currentXP}
                  /
                  {currentExpert.maxXP}
                </span>

              </div>

              <div
                className="
                  mt-2
                  h-2
                  bg-slate-700
                  rounded-full
                "
              >

                <div
                  className="h-2 rounded-full"
                  style={{
                    width:
                      `${progress}%`,
                    backgroundColor:
                      currentExpert.color,
                  }}
                />

              </div>

            </div>

          </div>

          <button
            onClick={() =>
              navigate(
                `/experts`
              )
            }
            className="
              w-full
              mt-4
              py-3
              rounded-xl
              bg-yellow-500
              text-black
              font-bold
            "
          >
            View Experts
          </button>

        </div>

      </div>
      
      {/* Energy */}

      <div className="px-4 mt-4">

        <div
          className="
            bg-slate-900
            rounded-2xl
            p-4
          "
        >

          <div className="flex justify-between">

            <span className="text-white">
              ⚡ Energy
            </span>

            <span className="text-white">
              {energy}/100
            </span>

          </div>

          <div
            className="
              mt-3
              h-3
              bg-slate-700
              rounded-full
            "
          >

            <div
              className="
                h-3
                bg-yellow-500
                rounded-full
              "
              style={{
                width: `${energy}%`,
              }}
            />

          </div>

        </div>

      </div>

      

      {/* Missions */}

      <div className="px-4 mt-4">

        <div
          className="
            bg-slate-900
            rounded-2xl
            p-4
          "
        >

          <div className="flex justify-between mb-3">

            <h3 className="text-white font-bold">
              Today's Missions
            </h3>

            <span className="text-yellow-500">
              2 / 3
            </span>

          </div>

          <MissionRow
            title="Mine 300 units of Iron Ore"
            progress="200 / 300"
            reward="25 XP"
          />

          <MissionRow
            title="Read: Iron in Bridge Engineering"
            progress="1 / 1"
            reward="✓"
          />

          <MissionRow
            title="Open Mineral Cards"
            progress="5 / 10"
            reward="20 XP"
          />

        </div>

      </div>

      {/* Mining Card */}

      <div className="px-4 mt-4">

        <div
          className="
            bg-slate-900
            rounded-2xl
            p-4
            relative
          "
        >

          <div className="flex justify-between">

            <div>

              <div className="text-white text-2xl font-bold">
                {mineral.name}
              </div>

              <div
                style={{
                  color:
                    mineral.color,
                }}
              >
                {mineral.rarity}
              </div>

            </div>

            <div
              className="font-bold text-xl"
              style={{
                color:
                  mineral.color,
              }}
            >
              {mineral.symbol}
            </div>

          </div>

          <div className="relative">

            <img
              src={mineral.image}
              alt=""
              className="
                w-full
                h-72
                object-contain
              "
            />

            <button
              onClick={() =>
                navigate("/mining")
              }
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  bg-green-500/20
                  border
                  border-green-500
                  rounded-full
                  p-6
                  backdrop-blur
                "
              >

                <Play
                  size={60}
                  fill="#22C55E"
                  color="#22C55E"
                />

              </div>

            </button>

          </div>

          <button
            onClick={() =>
              navigate("/mining")
            }
            className="
              w-full
              py-4
              rounded-xl
              bg-yellow-500
              text-black
              font-bold
            "
          >
            TAP TO MINE
          </button>

        </div>

      </div>

      <BottomNav />

    </div>
  );
}

function MissionRow({
  title,
  progress,
  reward,
}) {
  return (
    <div
      className="
        flex
        justify-between
        py-3
        border-b
        border-slate-800
      "
    >

      <div>

        <div className="text-white">
          {title}
        </div>

        <div className="text-slate-400 text-sm">
          {progress}
        </div>

      </div>

      <div className="text-yellow-500">
        {reward}
      </div>

    </div>
  );
}