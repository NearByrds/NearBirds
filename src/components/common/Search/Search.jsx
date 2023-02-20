import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <span className="text-gray-700">Search</span>
      <div className="flex gap-2 items-center w-96 border border-gray-300 pl-5 p-[6px] rounded-lg">
        <HiOutlineSearch className="color-1" />
        <input
          type="text"
          id="simple-search"
          className=" text-gray-900 text-xl  focus:outline-none "
          placeholder="Search a bird"
          required
        />
      </div>
    </div>
  );
};

export default Search;