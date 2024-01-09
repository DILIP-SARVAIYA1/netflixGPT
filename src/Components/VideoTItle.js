import React from "react";

const VideoTItle = ({ title, overview }) => {
  return (
    <div className="z-10 pt-[15%] pl-32 absolute w-full text-white bg-gradient-to-tr from-black aspect-video">
      <h1 className="font-bold text-3xl mb-6">{title}</h1>
      <h2 className="w-2/4">{overview}</h2>
      <div className="mt-14">
        <button className="bg-gray-500 py-2 px-6 text-white font-bold bg-opacity-90 hover:bg-opacity-80 rounded-md shadow-md mr-4">
          ▶️ Play
        </button>
        <button className="bg-gray-700 py-2 px-6 text-white bg-opacity-80 font-bold rounded-md shadow-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTItle;
