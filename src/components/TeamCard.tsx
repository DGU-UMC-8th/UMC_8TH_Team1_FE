import { useState } from "react";
import type { Team } from "../types/team";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDue = `${team.due.getFullYear()}.${String(
    team.due.getMonth() + 1
  ).padStart(2, "0")}.${String(team.due.getDate()).padStart(2, "0")}`;

  return (
    <div
      className="bg-white p-4 rounded-xl shadow-lg w-80 h-60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold text-gray-900">{team.name}</h2>
        <span
          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
            team.state === "모집중"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {team.state}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
        {team.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {team.role.map((role) => (
          <span
            key={role}
            className="inline-block px-2 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full"
          >
            {role}
          </span>
        ))}
      </div>

      <div className="flex items-center text-gray-500 text-sm mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>마감일: {formattedDue}</span>
      </div>

      <button
        className={`mt-4 w-full font-medium py-2 rounded-md text-white bg-blue-600 transition-transform duration-300 ${
          isHovered ? "scale-105 bg-blue-700" : ""
        }`}
      >
        상세 보기
      </button>
    </div>
  );
}
