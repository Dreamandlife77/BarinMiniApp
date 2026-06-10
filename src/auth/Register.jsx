import { useNavigate } from "react-router-dom";
import logo from "../assets/Auth.png";

export default function Register() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020617] px-6">

      {/* Logo */}

      <div className="pt-10 flex justify-center">

        <img
          src={logo}
          alt=""
          className="
            w-72
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
          Create Account
        </h1>

        <p className="text-slate-400 mt-2">
          Join the BARIN mining ecosystem
        </p>

      </div>

      {/* Form */}

      <div className="mt-8 space-y-4">

        <input
          type="text"
          placeholder="Full Name"
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

        <input
          type="password"
          placeholder="Confirm Password"
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

      <button
        onClick={() =>
            navigate("/login")
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
        CREATE ACCOUNT
      </button>

      <div className="mt-8 text-center">

        <span className="text-slate-400">
          Already have an account?
        </span>

        <button
          onClick={() =>
            navigate("/login")
          }
          className="
            ml-2
            text-yellow-500
            font-bold
          "
        >
          Login
        </button>

      </div>

    </div>
  );
}