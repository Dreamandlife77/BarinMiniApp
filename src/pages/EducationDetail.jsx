import { useParams } from "react-router-dom";
import { experts } from "../data/experts";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EducationDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const expert = experts.find(
    e => String(e.id) === String(id)
  );

  if (!expert) return null;

  const education =
    expert.education;

  return (
    <div className="min-h-screen bg-[#020617]">

      <div className="relative">

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

        <img
          src={education.image}
          alt=""
          className="
            w-full
            h-auto
            object-cover
          "
        />

      </div>

      <div className="p-4">

        <h1
          className="text-3xl font-bold"
          style={{
            color: education.color,
          }}
        >
          {education.title}
        </h1>

        <div className="mt-6">

          <h3 className="text-white font-bold">
            Key Minerals
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {education.minerals.map(
              (mineral) => (
                <span
                  key={mineral}
                  className="
                    bg-slate-900
                    px-3
                    py-1
                    rounded-full
                    text-white
                  "
                >
                  {mineral}
                </span>
              )
            )}

          </div>

        </div>

        <div className="mt-6">

          <h3 className="text-white font-bold">
            Key Fact
          </h3>

          <p className="text-slate-300 mt-2">
            {education.fact}
          </p>

        </div>

        <div className="mt-6">

          <h3 className="text-white font-bold">
            BARIN Connection
          </h3>

          <p className="text-slate-300 mt-2">
            {education.connection}
          </p>

        </div>

      </div>

    </div>
  );
}