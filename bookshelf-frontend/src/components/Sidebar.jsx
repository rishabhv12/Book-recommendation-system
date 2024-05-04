import React from "react";
import home from "../Assests/home.svg";
import shelf from "../Assests/shelf.svg";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar w-1/6 h-full py-9 flex flex-col items-center justify-start gap-28">
      {" "}
      <h1 className="text-2xl font-semibold">
        <span className="text-red-400 text-4xl">Book </span><span className="text-4xl tracking-widest">Flix</span>
      </h1>
      <div>
        <ol className="profile-option flex flex-col gap-6">
          <li className="flex justify-center items-center gap-3">
            <img src={home} alt="home" className="w-6 h-6" />
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-slate-900 font-semibold text-2xl" : "text-slate-500 text-2xl"
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li className="flex justify-start items-center gap-3">
            <img src={shelf} alt="home" className="w-6 h-6" />
            <NavLink
              to="/shelf"
              className={({ isActive }) =>
                isActive ? "text-slate-900 font-semibold text-2xl" : "text-slate-500 text-2xl"
              }
            >
              Shelf
            </NavLink>
          </li> */}
        </ol>
      </div>
    </div>
  );
}
