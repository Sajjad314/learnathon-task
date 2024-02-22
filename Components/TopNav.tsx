"use client";

import Image from "next/image";
import arrowDown from "@/assets/arrow-down-filled-triangle.png";
import manIcon from "@/assets/man.png";
import NotificationSVG from "@/assets/Icon/NotificationSVG";
import SearchSVG from "@/assets/Icon/SearchSVG";
import AddPopupSVG from "@/assets/Icon/AddPopupSVG";
import { useState } from "react";
import ProfileDropDown from "./ProfileDropDown";

export default function TopNav() {
  const [isCardOpen, setIsCardOpen] = useState<boolean>(false);
  const toggleCard = () => {
    setIsCardOpen((prevState) => !prevState);
  };
  return (
    <div className=" p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-[#17173F]">Analytics</h1>

        <button className="ml-8 bg-white border border-[#B1B6CF] text-gray-700 px-4 py-2 rounded-[10px] h-11 w-44 flex items-center justify-center">
          <p className=" mr-2 pr-2 font-semibold">Last 6 months</p>
          <Image src={arrowDown} alt="arowdown" height={5} width={10}></Image>
        </button>
      </div>

      {/* Right side - 4 Buttons */}
      <div className="flex items-center">
        <button className="mr-2 w-[190px] h-[45px] bg-[#17173F] text-gray-700 px-3 py-2 rounded-[10px] flex items-center justify-center">
          <p className=" mr-2 text-sm  text-white">Create New Popup</p>
          <AddPopupSVG />
        </button>
        <button className="mr-2 w-[45px] h-[45px] bg-white text-gray-700 px-3 py-2 rounded-[10px]">
          <SearchSVG />
        </button>
        <button className="mr-2 w-[45px] h-[45px] bg-white text-gray-700 px-3 py-2 rounded-[10px]">
          <NotificationSVG />
        </button>
        <div>
          <button
            className="mr-2  bg-white px-3 py-2 rounded-[10px] flex items-center relative"
            onClick={toggleCard}
          >
            <div className="flex flex-col mr-4">
              <p className="text-[#17173F] font-semibold text-sm">
                Sazzad Hossain
              </p>
              <p className="text-[#CEDEE1] text-sm">user@email.com</p>
            </div>
            <Image
              src={manIcon}
              alt="Profile Pic"
              className="rounded-full mr-2"
              height={43}
              width={34}
            ></Image>
          </button>
          <ProfileDropDown
            isCardOpen={isCardOpen}
            setIsCardOpen={setIsCardOpen}
          />
        </div>
      </div>
    </div>
  );
}
