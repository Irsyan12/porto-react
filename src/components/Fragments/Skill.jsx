import React from "react";
import { Progress } from "@material-tailwind/react";

const Skill = ({ skillName, percentage }) => {
  return (
    <div className="mb-4">
      <p className="text-zinc-800 font-semibold">{skillName}</p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              {percentage}%
            </span>
          </div>
        </div>
        <div className="flex space-x-3">
          <progress
            className="flex-1 h-3 w-full bg-zinc-200 appearance-none bg-blue-200 rounded-full"
            max="100"
            value={percentage}
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
