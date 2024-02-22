"use client";

import InstallationCodeIconSVG from "@/assets/Icon/InstallationCodeIconSVG";
import LineSVG from "@/assets/Icon/LineSVG";
import LogoutIconSVG from "@/assets/Icon/LogoutIconIconSVG";
import PaymentIconSVG from "@/assets/Icon/PaymentIconSVG";
import ProfileIconSVG from "@/assets/Icon/ProfileIconSVG";
import { dmSans } from "@/utils/fonts/index";
import React, { useState, useRef, useEffect } from "react";

const ProfileDropDown = ({
  isCardOpen,
  setIsCardOpen,
}: {
  isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsCardOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative ">
      {isCardOpen && (
        <div>
          <div className="fixed inset-0 opacity-25"></div>
          <div
            ref={cardRef}
            className=" bg-white shadow-md rounded-lg p-4 absolute transform -translate-x-1/2 w-[237px] flex flex-col gap-2 top-[8px] left-[72px]"
          >
            <div
              className=" flex flex-row items-start gap-2 hover:cursor-pointer"
              onClick={() => {}}
            >
              <ProfileIconSVG />
              <p
                className={`${dmSans.style.fontFamily} text-base font-normal leading-5 tracking-tight text-left`}
              >
                Profile
              </p>
            </div>
            <LineSVG />
            <div
              className=" flex flex-row justify-start items-start gap-2 hover:cursor-pointer"
              onClick={() => {}}
            >
              <PaymentIconSVG />
              <p
                className={`${dmSans.style.fontFamily} text-base font-normal leading-5 tracking-tight text-left`}
              >
                Payment & Subscription
              </p>
            </div>
            <LineSVG />
            <div
              className=" flex flex-row items-start gap-2 hover:cursor-pointer"
              onClick={() => {}}
            >
              <InstallationCodeIconSVG />
              <p
                className={`${dmSans.style.fontFamily} text-base font-normal leading-5 tracking-tight text-left`}
              >
                Installation Code
              </p>
            </div>
            <LineSVG />
            <div
              className=" hover:cursor-pointer flex flex-row items-start gap-2"
              onClick={() => {}}
            >
              <LogoutIconSVG />
              <p
                className={`${dmSans.style.fontFamily} text-base font-normal leading-5 tracking-tight text-left`}
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
