import React, { useContext } from "react";
import { Progress } from "@material-tailwind/react";
import { DarkMode } from "../../context/DarkMode";

const Skill = ({ skillName, percentage }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div className="mb-4">
      <p
        className={` font-semibold ${
          isDarkMode ? "text-slate-300" : "text-slate-800"
        }`}
      >
        {skillName}
      </p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full   ${
                isDarkMode
                  ? "text-slate-200 bg-teal-900"
                  : "text-teal-600 bg-teal-200"
              }`}
            >
              {percentage}%
            </span>
          </div>
        </div>
        <div className="flex space-x-3">
          <progress
            className="flex-1 h-3"
            max="100"
            value={percentage}
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
