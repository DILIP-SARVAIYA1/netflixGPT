import React from "react";
import language from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.language);
  console.log(langKey);
  return (
    <div className="pt-[15%] w-1/2 mx-auto shadow-lg">
      <form action="" className="grid grid-cols-12 bg-gray-600 rounded-lg">
        <input
          className="p-4 m-2 outline-none border border-black rounded-lg col-span-9 bg-gray-300"
          type="text"
          placeholder={language[langKey].placeHolder}
        />
        <button className="px-8 py-4 m-2 bg-red-700 text-white rounded-lg col-span-3">
          {language[langKey].name}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
