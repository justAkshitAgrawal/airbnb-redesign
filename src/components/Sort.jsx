import React from "react";

import { BsChevronDown } from "react-icons/bs";

function Sort() {
  return (
    <div className="flex flex-col pt-10 w-[25%] ml-20 font-raleway pr-14">
      <div className="flex items-center justify-between px-4 py-3 bg-[#2C2C33] text-gray-400 rounded-3xl mt-5 cursor-pointer">
        <h1>Sort By</h1>
        <BsChevronDown className="w-5 h-5" />
      </div>
      <div className="pt-20 text-white">
        <h1 className="text-xl font-extrabold tracking-widest font-poppins">
          Best Places
        </h1>
        <img
          src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2218&q=80"
          alt=""
          className="mt-5 cursor-pointer rounded-3xl"
        />
      </div>
      <div className="pt-20 text-white">
        <h1 className="text-xl font-extrabold tracking-widest font-poppins">
          Best Landlords
        </h1>
        <div className="flex mt-5 space-x-5">
          <img
            src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1"
            alt=""
            className="h-20 border-2 border-green-500 cursor-pointer rounded-3xl"
          />
          <img
            src="https://assets.vogue.com/photos/5c6587889dc93d2d50b0cd2a/master/pass/00_promo_ryan_g.jpg"
            alt=""
            className="h-20 border-2 border-green-500 cursor-pointer rounded-3xl"
          />
          <img
            src="https://pbs.twimg.com/profile_images/742877069793742848/c0Ec2mTU_400x400.jpg"
            alt=""
            className="h-20 border-2 cursor-pointer rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Sort;
