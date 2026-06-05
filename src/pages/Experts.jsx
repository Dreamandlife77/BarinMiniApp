import ExpertCard from "../components/ExpertCard";
import BottomNav from "../components/BottomNav";

import { expertPairs } from "../data/expertPairs";

export default function Experts() {

  return (
    <div className="min-h-screen bg-[#020617] pb-24">

      <div className="p-4 text-center">

        <h1 className="text-white text-2xl font-bold">
          Mining Experts
        </h1>

      </div>

      <div className="px-4">

        {expertPairs.map((pair, index) => (

          <ExpertCard
            key={index}
            pair={pair}
            rank={index + 1}
          />

        ))}

      </div>

      <BottomNav />

    </div>
  );
}