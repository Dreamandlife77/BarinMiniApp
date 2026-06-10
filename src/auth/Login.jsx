import { useNavigate } from "react-router-dom";
import logo from "../assets/Auth.png";
import Google from "../assets/google.png"
import Telegram from "../assets/telegram.png"


export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] px-6">

      {/* Logo */}

      <div className="pt-12 flex justify-center">

        <img
          src={logo}
          alt=""
          className="
            w-60
            object-contain
          "
        />

      </div>

      {/* Heading */}

      <div className="mt-6 text-center">

        <h1
          className="
            text-white
            text-3xl
            font-bold
          "
        >
          Welcome Back
        </h1>

        <p className="text-slate-400 mt-2">
          Continue your mining journey
        </p>

      </div>

      {/* Form */}

      <div className="mt-10 space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="
            w-full
            bg-[#091827]
            text-white
            rounded-2xl
            p-4
            outline-none
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            bg-[#091827]
            text-white
            rounded-2xl
            p-4
            outline-none
          "
        />

      </div>

      {/* Login Button */}

      <button
        onClick={() =>
          navigate("/home")
        }
        className="
          w-full
          mt-8
          py-4
          rounded-2xl
          bg-yellow-500
          text-black
          font-bold
        "
      >
        LOGIN
      </button>

      {/* Divider */}

      <div className="flex items-center gap-3 mt-8">

        <div className="flex-1 h-px bg-slate-700" />

        <span className="text-slate-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-slate-700" />

      </div>

      {/* Telegram Login */}

      <button
        onClick={() => {
          console.log(
            "Telegram Login"
          );
        }}
        className="
          w-full
          mt-6
          py-4
          rounded-2xl
          bg-white
          text-Black
          font-bold
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <img
    src={Telegram}
    alt="Telegram"
    className="w-6 h-6"
  />

        Continue with Telegram
      </button>

      {/* Google Login */}

      <button
        onClick={() => {
          console.log(
            "Google Login"
          );
        }}
        className="
          w-full
          mt-4
          py-4
          rounded-2xl
          bg-white
          text-black
          font-bold
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <img
    src={Google}
    alt="Google"
    className="w-6 h-6"
  />

        Continue with Google
      </button>

      {/* Register */}

      <div className="mt-8 text-center">

        <span className="text-slate-400">
          Don't have an account?
        </span>

        <button
          onClick={() =>
            navigate("/register")
          }
          className="
            ml-2
            text-yellow-500
            font-bold
          "
        >
          Register
        </button>

      </div>

    </div>
  );
}