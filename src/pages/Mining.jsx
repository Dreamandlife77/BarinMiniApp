import { useState, useEffect } from "react";

import BottomNav from "../components/BottomNav";
import { minerals } from "../data/mineralData";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Mining() {
  const navigate = useNavigate();

  const [energy, setEnergy] =
    useState(100);

  const [combo, setCombo] =
    useState(0);

  const [barin, setBarin] =
    useState(0);

  const [selectedMineral, setSelectedMineral] =
    useState(minerals[0]);

  const [hp, setHp] =
    useState(minerals[0].hp);

  useEffect(() => {

    const timer =
      setInterval(() => {

        setEnergy((prev) =>
          prev < 100
            ? prev + 1
            : prev
        );

      }, 2000);

    return () =>
      clearInterval(timer);

  }, []);

  useEffect(() => {

    setHp(
      selectedMineral.hp
    );

    setCombo(0);

  }, [selectedMineral]);

  const handleTap = () => {

    if (energy <= 0)
      return;

    setEnergy((e) => e - 1);

    const damage =
      combo >= 5
        ? 20
        : 10;

    const newHp =
      hp - damage;

    setHp(newHp);

    setCombo((c) => c + 1);

    if (newHp <= 0) {

      const reward =
        combo >= 5
          ? selectedMineral.reward * 2
          : selectedMineral.reward;

      setBarin(
        (b) => b + reward
      );

      setHp(
        selectedMineral.hp
      );

      setCombo(0);
    }
  };

  const hpPercent =
    (hp /
      selectedMineral.hp) *
    100;

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      {/* Energy */}

      <div className="p-4">

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
              mt-2
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

      {/* Mineral Selector */}

      <div
        className="
          px-4
          flex
          gap-2
          overflow-x-auto
        "
      >

        {minerals.map(
          (mineral) => (

            <button
              key={mineral.id}
              onClick={() =>
                setSelectedMineral(
                  mineral
                )
              }
              className={`
                rounded-xl
                border-2

                ${
                  selectedMineral.id ===
                  mineral.id
                    ? "border-yellow-500"
                    : "border-slate-700"
                }
              `}
            >

              <img
                src={mineral.image}
                alt=""
                className="
                  w-16
                  h-16
                  object-contain
                "
              />

            </button>

          )
        )}

        <button
      onClick={() =>
        navigate("/minerals")
      }
      className="
        text-yellow-500
        hover:text-yellow-400
      "
    >
      <ChevronRight size={22} />
    </button>

      </div>

      {/* Main Card */}

      <div className="p-4">

        <div
          className="
            bg-slate-900
            rounded-3xl
            p-5
            relative
          "
        >

          <div className="flex justify-between">

            <div>

              <h2
                className="text-3xl font-bold"
                style={{
                  color:
                    selectedMineral.color,
                }}
              >
                {selectedMineral.name}
              </h2>

              <p
                style={{
                  color:
                    selectedMineral.color,
                }}
              >
                {selectedMineral.rarity}
              </p>

            </div>

            <div className="text-right">

              <div className="text-white">
                Combo
              </div>

              <div
                className="
                  text-yellow-500
                  text-4xl
                  font-bold
                "
              >
                x{combo}
              </div>

            </div>

          </div>

          <button
            onClick={handleTap}
            className="
              w-full
              active:scale-95
              transition
            "
          >

            <img
              src={
                selectedMineral.image
              }
              alt=""
              className="
                w-72
                mx-auto
                my-6
              "
            />

          </button>

          {combo >= 5 && (

            <div
              className="
                absolute
                right-6
                top-36
                border-2
                border-yellow-500
                rounded-full
                w-20
                h-20
                flex
                items-center
                justify-center
                text-yellow-500
                font-bold
              "
            >
              CRIT 2x
            </div>

          )}

          {/* HP */}

          <div>

            <div className="flex justify-between">

              <span className="text-white">
                HP
              </span>

              <span className="text-white">
                {hp} /
                {selectedMineral.hp}
              </span>

            </div>

            <div
              className="
                mt-2
                h-3
                bg-slate-700
                rounded-full
              "
            >

              <div
                className="
                  h-3
                  bg-red-500
                  rounded-full
                "
                style={{
                  width:
                    `${hpPercent}%`,
                }}
              />

            </div>

          </div>

          {/* Reward */}

          <div
            className="
              mt-6
              bg-[#091827]
              rounded-2xl
              p-4
              text-center
            "
          >

            <div className="text-slate-400">
              Possible Reward
            </div>

            <div
              className="
                text-yellow-500
                text-3xl
                font-bold
              "
            >
              {selectedMineral.reward}
              {" "}
              BARIN
            </div>

          </div>

          <div
            className="
              mt-4
              text-center
              text-white
            "
          >
            Total Earned:
            {" "}
            <span className="text-yellow-500">
              {barin}
            </span>
          </div>

        </div>

      </div>

      <BottomNav />

    </div>
  );
}