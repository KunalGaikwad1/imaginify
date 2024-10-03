import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 flex flex-col text-white justify-center items-center bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600">
      <h2 className="text-3xl font-bold ">Brows All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 my-5 border w-[50%] rounded-md bg-white">
          <Search className="text-purple-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full outline-none text-black"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
