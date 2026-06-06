import { useState } from "react";

import BottomNav from "../components/BottomNav";
import TotalMissionsTabs from "../components/TotalMissionsTabs";
import MissionSection from "../components/MissionSection";

import {
  missionCategories,
} from "../data/missions";

export default function Missions() {

  const [tab, setTab] =
    useState("all");

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      <div className="p-4">

        <TotalMissionsTabs
          active={tab}
          onChange={setTab}
        />

        {(tab === "all" ||
          tab === "learn") && (
          <MissionSection
            title="📚 Learn Missions"
            missions={
              missionCategories.learn
            }
          />
        )}

        {(tab === "all" ||
          tab === "mine") && (
          <MissionSection
            title="⛏️ Mine Missions"
            missions={
              missionCategories.mine
            }
          />
        )}

        {(tab === "all" ||
          tab === "social") && (
          <MissionSection
            title="✖ Social Missions"
            missions={
              missionCategories.social
            }
          />
        )}

        {(tab === "all" ||
          tab === "community") && (
          <MissionSection
            title="👥 Community Missions"
            missions={
              missionCategories.community
            }
          />
        )}

      </div>

      <BottomNav />

    </div>
  );
}