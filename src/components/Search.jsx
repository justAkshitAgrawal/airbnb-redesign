import React from "react";

import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="flex flex-col pt-10 w-[45%] ml-10 space-y-12 h-screen font-raleway">
      <div className="flex items-center px-4 py-3 space-x-3 text-gray-400 bg-[#2C2C33] rounded-3xl mt-5">
        <BiSearch className="w-5 h-5 ml-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex flex-col -space-y-8">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1338&q=80"
          alt=""
          className="object-cover w-full rounded-3xl h-[700px] cursor-pointer"
        />
        <div className="flex px-5 w-full font-raleway py-7 space-x-5 text-white bg-[#18181E] items-center justify-around rounded-3xl">
          <div className="cursor-pointer hover:text-gray-400">Location</div>
          <div className="cursor-pointer hover:text-gray-400">Check in</div>
          <div className="cursor-pointer hover:text-gray-400">Check out</div>
          <div className="cursor-pointer hover:text-gray-400">Guests</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
