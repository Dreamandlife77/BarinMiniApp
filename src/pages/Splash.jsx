export default function Splash() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">

      <div className="w-full max-w-sm">

        {/* Card */}
        <div className="relative overflow-hidden rounded-[32px] border border-yellow-600/30 bg-gradient-to-b from-[#07111f] via-[#04101c] to-[#020617]">

          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f59e0b22,transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10 px-6 pt-10 pb-8">

            {/* Logo */}
            <h1 className="text-center">
              <span className="block text-5xl font-black text-yellow-500 tracking-wide">
                BARIN
              </span>

              <span className="block text-2xl font-bold text-white">
                MINING QUEST
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mt-5 text-center">

              <p className="text-yellow-400 font-medium">
                Learn Mining. Earn Rewards.
              </p>

              <p className="text-slate-300 mt-2 leading-relaxed">
                Own the Future of
                <br />
                Critical Minerals.
              </p>

            </div>

            {/* Character */}
            <div className="mt-8 flex justify-center">

              <img
                src="https://placehold.co/280x280"
                alt="miner"
                className="w-64"
              />

            </div>

            {/* Buttons */}
            <div className="mt-8 space-y-3">

              <button
                className="
                w-full
                rounded-2xl
                bg-yellow-500
                py-4
                text-lg
                font-bold
                text-black
                transition
                active:scale-95
              "
              >
                LET'S GO
              </button>

              <button
                className="
                w-full
                rounded-2xl
                border
                border-yellow-500/40
                py-4
                text-lg
                font-bold
                text-white
              "
              >
                بزن بریم
              </button>

            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">

              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <div className="h-2 w-2 rounded-full bg-slate-600" />
              <div className="h-2 w-2 rounded-full bg-slate-600" />
              <div className="h-2 w-2 rounded-full bg-slate-600" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}