"use client";

import React, { useState } from "react";
import Image from "next/image";
import placeholderImage from "@/assets/Screenshot (67).png";
import dotMenu from "@/assets/dots.png";
import DeleteIconSVG from "@/assets/Icon/DeleteIconSVG";

interface Row {
  id: string;
  popup_Names: string;
  views: string;
  clicks: string;
  conversations: string;
  conversations_Rate: string;
  status: string;
  action: string;
}
const DashboardTable = () => {
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
  const data: Row[] = [
    {
      id: "1a",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "2b",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "3c",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "4d",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "5f",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "6g",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "7h",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "8i",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "9j",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "10k",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "11l",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "12m",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "13n",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "14o",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "15p",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
    {
      id: "16q",
      popup_Names: "l",
      views: "340",
      clicks: "560",
      conversations: "89",
      conversations_Rate: "22.98%",
      status: "Active",
      action: "dot",
    },
  ];
  const columns = [
    "check",
    "Popup Names",
    "Views",
    "Clicks",
    "Conversations",
    "Conversations Rate",
    "Status",
    "Action",
  ];
  const handleSelectAllClick = () => {
    if (isAllSelected) {
      setIsAllSelected(false);
      setSelectedRow([]);
    } else {
      const idsArray: string[] = data.map((row) => row.id);
      setIsAllSelected(true);
      setSelectedRow(idsArray);
    }
  };
  const handleSelect = (id: string) => {
    if (selectedRow.includes(id)) {
      const filteredArray: string[] = selectedRow.filter((item) => item !== id);
      setSelectedRow(filteredArray);
      setIsAllSelected(false);
    } else {
      setSelectedRow((prevArray) => [...prevArray, id]);
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <p className="text-xl font-semibold">Active Popups</p>
          <button className="ml-2 w-[33px] h-[33px] bg-[#D2FBE7] rounded-[17px] items-center font-semibold">
            23
          </button>
        </div>
        {selectedRow.length !== 0 && (
          <div className=" p-2 flex flex-row">
            <p className="text-base font-medium leading-5 tracking-tight text-left pr-2">
              {selectedRow.length} Selected
            </p>
            <DeleteIconSVG />
          </div>
        )}
      </div>
      <div className="container mx-auto">
        <div className="max-h-[460px] overflow-y-scroll scrollbar-thumb-black scrollbar-track-transparent">
          <table className="w-full table-auto">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <td
                    key={index}
                    className="py-2 px-4 text-left text-[#939ED5] text-sm border-b"
                  >
                    {column === "check" ? (
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={handleSelectAllClick}
                        className=" h-5 w-5 rounded border-2 border-black focus:ring-0"
                      />
                    ) : (
                      column
                    )}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="h-16">
                  <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                    <input
                      type="checkbox"
                      checked={selectedRow.includes(row.id)}
                      onChange={() => handleSelect(row.id)}
                    />
                  </td>
                  <td className="border-b py-2 text-left">
                    <div className="flex items-center">
                      <Image
                        src={placeholderImage}
                        alt="Image"
                        height={61}
                        width={82}
                        className="mr-2"
                      ></Image>

                      <div>
                        <p className="font-bold text-[16px]">
                          Limited Offer 2023
                        </p>
                        <p className="text-gray-500 text-[10px]">
                          October 11, 2023 12:20 PM
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                    {row.views}
                  </td>
                  <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                    {row.clicks}
                  </td>
                  <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                    {row.conversations}
                  </td>
                  <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                    {row.conversations_Rate}
                  </td>
                  <td className="border-b py-2 px-4 text-left">
                    {" "}
                    <button className=" w-[51px] h-[19px] bg-[#D2FBE7] rounded-[12px] items-center font-bold text-[10px]">
                      {row.status}
                    </button>
                  </td>
                  <td className="border-b py-2 px-4 text-left">
                    <Image
                      src={dotMenu}
                      alt="dotMenu"
                      height={24}
                      width={24}
                    ></Image>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
