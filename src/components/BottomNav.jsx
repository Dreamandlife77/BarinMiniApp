import {
  Home,
  User,
  Trophy,
  ScrollText,
  Pickaxe
} from "lucide-react";

import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 flex justify-around py-3">

      <Link to="/">
        <Home size={22}/>
      </Link>

      <Link to="/characters">
        <User size={22}/>
      </Link>

      <Link to="/missions">
        <ScrollText size={22}/>
      </Link>

      <Link to="/leaderboard">
        <Trophy size={22}/>
      </Link>

      <Link to="/profile">
        <Pickaxe size={22}/>
      </Link>

    </div>
  );
}