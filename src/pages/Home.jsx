import BottomNav from "../components/BottomNav";

export default function Home() {

  return (
    <div className="p-4 pb-24">

      <div className="bg-slate-900 rounded-3xl p-4">

        <div className="flex justify-between">

          <div>
            <h1 className="font-bold">
              Explorer
            </h1>

            <p className="text-sm text-gray-400">
              Level 7
            </p>
          </div>

          <div>
            🔔
          </div>

        </div>

      </div>

      <div className="mt-4 bg-slate-900 rounded-3xl p-4">

        <img
          src="https://placehold.co/300x300"
          className="rounded-xl"
        />

        <h2 className="mt-3 text-xl font-bold">
          Current Expert
        </h2>

        <p className="text-yellow-500">
          Kaveh
        </p>

      </div>

      <BottomNav />

    </div>
  );
}