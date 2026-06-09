import {
  useState,
  useEffect,
} from "react";

import BottomNav from "../components/BottomNav";
import TotalMissionsTabs from "../components/TotalMissionsTabs";
import MissionSection from "../components/MissionSection";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  missionCategories,
} from "../data/missions";

export default function Missions() {

  const [language, setLanguage] =
  useState("en");

useEffect(() => {
  const savedLanguage =
    localStorage.getItem("language") ||
    "en";

  setLanguage(savedLanguage);
}, []);
   const navigate = useNavigate();
  const [tab, setTab] =
    useState("all");

  return (
    <div dir={language === "fa" ? "rtl" : "ltr"}  className="min-h-screen bg-[#020617] pb-24">

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
  {language === "fa"
    ? "ماموریت‌ها"
    : "Missions"}
</h1>

      </div>

      <div className="p-4">

        <TotalMissionsTabs
          active={tab}
          onChange={setTab}
        />

        {(tab === "all" ||
          tab === "learn") && (
          <MissionSection
            title={
  language === "fa"
    ? "📚 ماموریت‌های آموزشی"
    : "📚 Learn Missions"
}
            missions={
              missionCategories.learn
            }
          />
        )}

        {(tab === "all" ||
          tab === "mine") && (
          <MissionSection
            title={
  language === "fa"
    ? "⛏️ ماموریت‌های استخراج"
    : "⛏️ Mine Missions"
}
            missions={
              missionCategories.mine
            }
          />
        )}

        {(tab === "all" ||
          tab === "social") && (
          <MissionSection
            title={
  language === "fa"
    ? "✖ ماموریت‌های اجتماعی"
    : "✖ Social Missions"
}
            missions={
              missionCategories.social
            }
          />
        )}

        {(tab === "all" ||
          tab === "community") && (
          <MissionSection
            title={
  language === "fa"
    ? "👥 ماموریت‌های جامعه"
    : "👥 Community Missions"
}
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