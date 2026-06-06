import { useState } from "react";

export default function MissionCard({
  mission,
}) {

  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
        bg-slate-900
        rounded-2xl
        overflow-hidden
      "
    >

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          w-full
          flex
          justify-between
          items-center
          p-4
        "
      >

        <span className="text-white">
          {mission.title}
        </span>

        <div className="flex gap-3">

          <span className="text-yellow-500">
            {mission.reward}
          </span>

          <span className="text-slate-400">
            {open ? "▲" : "▼"}
          </span>

        </div>

      </button>

      {open && (

        <div className="px-4 pb-4">

          <div className="border-t border-slate-700 pt-3">

            <p className="text-slate-300">
              {mission.description}
            </p>

            <p className="text-slate-500 mt-3 text-sm">
              Platform:
              <span className="text-white ml-2">
                {mission.platform}
              </span>
            </p>

          </div>

        </div>

      )}

    </div>
  );
}