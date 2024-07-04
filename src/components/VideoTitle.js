import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white w-[25%] pt-80 pl-14">
      <h1 className=" font-extrabold text-3xl">{title}</h1>
      <p className="text-xs">{overview}</p>
    </div>
  );
};
