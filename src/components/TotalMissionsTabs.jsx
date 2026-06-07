export default function TotalMissionsTabs({
  active,
  onChange,
}) {
  const tabs = [
    "all",
    "learn",
    "mine",
    "social",
    "community",
  ];

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            px-2
            py-1
            rounded-xl
            whitespace-nowrap
            text-sm

            ${
              active === tab
                ? "bg-yellow-500 text-black"
                : "bg-slate-900 text-white"
            }
          `}
        >
          {tab.charAt(0).toUpperCase() +
            tab.slice(1)}
        </button>

      ))}

    </div>
  );
}