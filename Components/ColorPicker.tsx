"use client";

import React, { useState, useRef, useEffect } from "react";

const ColorPicker = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("blue-500");
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

  const handleClick = (color: string) => {
    setSelectedColor(color);

    console.log("Color clicked:", color);
  };

  const colors = [
    "blue-500",
    "green-500",
    "red-500",
    "yellow-500",
    "purple-500",
    "indigo-500",
    "pink-500",
    "teal-500",
    "gray-500",
    "orange-500",
    "blue-700",
    "green-700",
    "red-700",
    "yellow-700",
    "purple-700",
    "indigo-700",
    "pink-700",
    "teal-700",
  ];

  return (
    <div className="flex flex-col items-center mt-8 relative">
      <p className={` text-lg mb-5 text-${selectedColor} `}>
        This is the chosen color
      </p>
      <button
        className={`bg-${selectedColor} hover:bg-${selectedColor} text-white font-bold py-2 px-4  rounded h-7 w-20`}
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
              {colors.map((colorCode: string, index: number) => {
                return (
                  <div
                    key={colorCode}
                    className="col-span-1 flex justify-center items-center"
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-${colorCode} ${
                        selectedColor === colorCode && "ring"
                      } cursor-pointer transform hover:scale-105 hover:ring transition duration-300 `}
                      onClick={() => handleClick(colorCode)}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
