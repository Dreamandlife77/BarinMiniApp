import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import { experts } from "../data/experts";
import BottomNav from "../components/BottomNav";

export default function ExpertsDetail() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [activeTab, setActiveTab] =
    useState("about");

  const expert = experts.find(
    (e) => String(e.id) === String(id)
  );

  if (!expert) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        Character not found
      </div>
    );
  }

  const progress =
    (expert.currentXP / expert.maxXP) * 100;

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      {/* Hero */}

      <div className="relative bg-[#091827]">

      {/* Back Button */}

      <button
        onClick={() => navigate("/experts")}
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
        <ArrowLeft size={20} />
      </button>

      <img
        src={expert.avatardetail}
        alt={expert.name}
        className="
          w-full
          h-auto
          object-cover
        "
      />

    </div>

      {/* Info */}

      <div className="p-4">

        <div className="flex items-end gap-3">

          <h1 className="text-white text-3xl font-bold">
            {expert.name}
          </h1>

          <span
            className="font-semibold mb-1"
            style={{
              color: expert.color,
            }}
          >
            {expert.role}
          </span>

        </div>

        <p className="text-slate-400">
          {expert.phase}
        </p>

        <p className="font-semibold mt-2"
            style={{
              color: expert.color,
            }}>
          {expert.quote}
        </p>

        {/* XP */}

        <div className="mt-4">

          <div className="flex justify-between">

            <span className="text-white">
              Level {expert.level}
            </span>

            <span className="text-slate-400">
              {expert.currentXP} / {expert.maxXP} XP
            </span>

          </div>

          <div className="mt-2 h-3 bg-slate-700 rounded-full">

            <div
              className="h-3 rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: expert.color,
              }}
            />

          </div>

        </div>

        {/* Tabs */}

        <div className="flex gap-2 mt-6">

          <TabButton
            active={activeTab === "about"}
            onClick={() =>
              setActiveTab("about")
            }
          >
            About
          </TabButton>

          <TabButton
            active={activeTab === "missions"}
            onClick={() =>
              setActiveTab("missions")
            }
          >
            Missions
          </TabButton>

          <TabButton
            active={activeTab === "tools"}
            onClick={() =>
              setActiveTab("tools")
            }
          >
            Tools
          </TabButton>

          <TabButton
            active={activeTab === "stats"}
            onClick={() =>
              setActiveTab("stats")
            }
          >
            Stats
          </TabButton>

        </div>

        {/* Content */}

        <div className="mt-4">

          {activeTab === "about" && (

            <div className="bg-slate-900 rounded-2xl p-4">

              <h3 className="text-yellow-400 font-bold">
                Profile
              </h3>

              <p className="text-slate-300 mt-3">
                {expert.name} is a professional{" "}
                {expert.role}.
              </p>

              <p className="text-slate-400 mt-3">
                Specializes in {expert.phase}
              </p>

            </div>

          )}

          {activeTab === "missions" && (

            <div className="space-y-3">

              <MissionCard
                title="Mineral Identification"
                reward="30 BARIN"
              />

              <MissionCard
                title="Deposit Mapping"
                reward="25 BARIN"
              />

              <MissionCard
                title="Exploration Report"
                reward="40 BARIN"
              />

            </div>

          )}

          {activeTab === "tools" && (

            <div className="space-y-3">

              {expert.tools.map((tool, index) => (

                <ToolCard
                  key={index}
                  icon={tool.icon}
                  name={tool.name}
                />

              ))}

            </div>

          )}

          {activeTab === "stats" && (

            <div className="bg-slate-900 rounded-2xl p-4">

              <StatRow
                label="Level"
                value={expert.level}
              />

              <StatRow
                label="Current XP"
                value={`${expert.currentXP}/${expert.maxXP}`}
              />

              <StatRow
                label="Weekly Rank"
                value={`#${expert.id}`}
              />

              <StatRow
                label="BARIN Earned"
                value="245"
              />

            </div>

          )}

        </div>

      </div>

      <BottomNav />

    </div>
  );
}

/* ========================== */

function TabButton({
  children,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1
        py-2
        rounded-xl
        text-sm
        font-semibold
        transition

        ${
          active
            ? "bg-yellow-500 text-black"
            : "bg-slate-900 text-white"
        }
      `}
    >
      {children}
    </button>
  );
}

/* ========================== */

function MissionCard({
  title,
  reward,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl p-4">

      <div className="flex justify-between">

        <span className="text-white">
          {title}
        </span>

        <span className="text-yellow-500">
          {reward}
        </span>

      </div>

    </div>
  );
}

/* ========================== */

function ToolCard({
  icon,
  name,
}) {
  return (
    <div
      className="
        bg-slate-900
        rounded-2xl
        p-4
        flex
        items-center
        gap-3
      "
    >
      <div className="text-2xl">
        {icon}
      </div>

      <span className="text-white">
        {name}
      </span>

    </div>
  );
}

/* ========================== */

function StatRow({
  label,
  value,
}) {
  return (
    <div className="flex justify-between py-2">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="text-white">
        {value}
      </span>

    </div>
  );
}