import Image from "next/image";
import placeholderImage from "@/assets/Screenshot (67).png";
import dotMenu from "@/assets/dots.png";

export default function Home() {
  const columns = [
    "Popup Names",
    "Views",
    "Clicks",
    "Conversations",
    "Conversations Rate",
    "Status",
    "Action",
  ];

  const data = [
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
    ["l", "340", "560", "89", "22.98%", "Active", "dot"],
  ];
  return (
    <main className=" min-h-screen flex flex-col">
      <div className="flex flex-1 m-2 ml-4 max-h-[415px]">
        <div className="flex-1 border p-4 bg-white rounded-[10px] mr-2">
          {/* Content for the left panel of the top div */}
          Left Panel
        </div>
        <div className="flex-1 border p-4 bg-white ml-2">
          {/* Content for the right panel of the top div */}
          Right Panel
        </div>
      </div>
      <div className="flex-1 border p-4 bg-white rounded-[10px] ml-4 m-2 ">
        <div className="flex flex-row">
          <p className=" text-xl font-semibold">Active Popups </p>
          <button className="ml-2  w-[33px] h-[33px] bg-[#D2FBE7] rounded-[17px] items-center font-semibold">
            23
          </button>
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
                      {column}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="h-16">
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
                      {row[1]}
                    </td>
                    <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                      {row[2]}
                    </td>
                    <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                      {row[3]}
                    </td>
                    <td className="border-b py-2 px-4 text-left font-bold text-[16px]">
                      {row[4]}
                    </td>
                    <td className="border-b py-2 px-4 text-left">
                      {" "}
                      <button className=" w-[51px] h-[19px] bg-[#D2FBE7] rounded-[12px] items-center font-bold text-[10px]">
                        {row[5]}
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
                    {/* {row.map((cell, cellIndex) => (
                      <>
                        {cellIndex === 0 && (
                          <td className="border-b py-2 px-4 text-left">
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
                        ) : (
                          <td
                            key={cellIndex}
                            className="border-b py-2 px-4 text-left"
                          >
                            {cell}
                          </td>
                        )}
                      </>
                    ))} */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
