import ExpertCard from "../components/ExpertCard";
import BottomNav from "../components/BottomNav";
import { expertPairs } from "../data/expertPairs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function Experts() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#020617] pb-24">

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