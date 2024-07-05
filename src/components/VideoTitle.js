import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white w-[25%] h-full pt-64 pl-14 bg-gradient-to-r from-black ">
      <h1 className=" font-extrabold text-4xl mb-2">{title}</h1>
      <p className="text-sm mb-2">{overview}</p>
      <div className="flex  gap-6">
        <button className="flex justify-center items-center gap-1 border bg-white text-black py-2 px-6 font-semibold rounded-md mt-3 text-md hover:opacity-80">
          <FaPlay /> <h1>Play</h1>
        </button>
        <button className="flex justify-center items-center gap-1 border bg-white text-black py-1 px-3 font-semibold text-md rounded-md mt-3 hover:opacity-80">
          <FaInfo className="text-sm font-bold" /> <h1>More Info</h1>
        </button>
      </div>
    </div>
  );
};
