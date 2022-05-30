import React from "react";

import { FaAirbnb, FaCompass } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiAirBalloon } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="h-screen bg-[#18181E] w-[25%] rounded-tr-3xl text-white flex flex-col items-center pt-10 space-y-16">
      <div>
        <img
          src="https://i.ibb.co/PDqPXJB/image.png"
          alt=""
          className="cursor-pointer w-60"
        />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img
          src="https://cdn.mos.cms.futurecdn.net/2QoiKo2fJb7GVQpG8qj79W-320-80.jpg"
          alt=""
          className="h-20 rounded-full cursor-pointer"
        />
        <h1 className="text-xl tracking-widest font-poppinsr\">
          Zach Galifianakis
        </h1>
      </div>

      <div className="flex flex-col items-start pt-4 space-y-10 text-gray-400">
        <div className="flex items-center space-x-5 bg-[#FC804A] rounded-3xl text-white cursor-pointer">
          <div className="px-3">
            <FaAirbnb className="w-5 h-5" />
          </div>
          <h1 className="py-2 pr-6">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-5 hover:text-[#FC804A] cursor-pointer">
          <div className="p-2 bg-[#25232C] rounded-full">
            <GoKey className="w-5 h-5 " />
          </div>
          <h1>Places</h1>
        </div>

        <div className="flex items-center space-x-5 hover:text-[#FC804A] cursor-pointer">
          <div className="p-2 bg-[#25232C] rounded-full">
            <MdOutlineLocationOn className="w-5 h-5 " />
          </div>
          <h1>Locations</h1>
        </div>

        <div className="flex items-center space-x-5 hover:text-[#FC804A] cursor-pointer">
          <div className="p-2 bg-[#25232C] rounded-full">
            <GiAirBalloon className="w-5 h-5 " />
          </div>
          <h1>Experiences</h1>
        </div>

        <div className="flex items-center space-x-5 hover:text-[#FC804A] cursor-pointer">
          <div className="p-2 bg-[#25232C] rounded-full">
            <FaCompass className="w-5 h-5 " />
          </div>
          <h1>Adventures</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
