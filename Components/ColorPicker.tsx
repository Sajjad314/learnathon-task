"use client";

import React, { useState, useRef, useEffect } from "react";

const ColorPicker = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<{
    bgColor: string;
    textColor: string;
  }>({ bgColor: "bg-blue-500", textColor: "text-blue-500" });
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

  const toggleCard = () => {
    setIsCardOpen((prevState) => !prevState);
  };

  const handleClick = (colorObj: { bgColor: string; textColor: string }) => {
    setSelectedColor(colorObj);

    console.log("Color clicked:", colorObj);
  };

  const colors = [
    { bgColor: "bg-blue-500", textColor: "text-blue-500" },
    { bgColor: "bg-green-500", textColor: "text-green-500" },
    { bgColor: "bg-red-500", textColor: "text-red-500" },
    { bgColor: "bg-yellow-500", textColor: "text-yellow-500" },
    { bgColor: "bg-purple-500", textColor: "text-purple-500" },
    { bgColor: "bg-indigo-500", textColor: "text-indigo-500" },
    { bgColor: "bg-pink-500", textColor: "text-pink-500" },
    { bgColor: "bg-teal-500", textColor: "text-teal-500" },
    { bgColor: "bg-gray-500", textColor: "text-gray-500" },
    { bgColor: "bg-orange-500", textColor: "text-orange-500" },
    { bgColor: "bg-blue-700", textColor: "text-blue-700" },
    { bgColor: "bg-green-700", textColor: "text-green-700" },
    { bgColor: "bg-red-700", textColor: "text-red-700" },
    { bgColor: "bg-yellow-700", textColor: "text-yellow-700" },
    { bgColor: "bg-purple-700", textColor: "text-purple-700" },
    { bgColor: "bg-indigo-700", textColor: "text-indigo-700" },
    { bgColor: "bg-pink-700", textColor: "text-pink-700" },
    { bgColor: "bg-teal-700", textColor: "text-teal-700" },
  ];

  return (
    <div className="flex flex-col items-center mt-8 relative">
      <p className={` text-lg mb-5 ${selectedColor.textColor} `}>
        This is the chosen color
      </p>
      <button
        className={`${selectedColor.bgColor} hover:bg-${selectedColor.bgColor} text-white font-bold py-2 px-4  rounded h-7 w-20`}
        onClick={toggleCard}
      ></button>
      {isCardOpen && (
        <div>
          <div className="fixed inset-0 opacity-25"></div>
          <div
            ref={cardRef}
            className=" bg-white shadow-md rounded-lg  mt-2 p-4 absolute transform -translate-x-1/2"
          >
            <div className="grid grid-cols-6 gap-1">
              {/* First Row */}
              {colors.map(
                (
                  colorObj: { bgColor: string; textColor: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={colorObj.bgColor}
                      className="col-span-1 flex justify-center items-center"
                    >
                      <div
                        className={`w-6 h-6 rounded-full ${colorObj.bgColor} ${
                          selectedColor.bgColor === colorObj.bgColor && "ring"
                        } cursor-pointer transform hover:scale-105 hover:ring transition duration-300 `}
                        onClick={() => handleClick(colorObj)}
                      ></div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
