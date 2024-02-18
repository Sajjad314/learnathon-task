"use client";

import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { dmSans } from "@/utils/fonts/index";
import ShopifySVG from "@/assets/Icon/ShopifySVG";
import WordpressSVG from "@/assets/Icon/WordpressSVG";

const InstallationCodeModal = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    const inputField = document.getElementById("code") as HTMLInputElement;

    if (inputField) {
      inputField.select();
      document.execCommand("copy");

      // Optionally, you can show a message or perform any other action
      setIsCopied(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Copy Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px] p-4 rounded-2 flex flex-col gap-4">
        <DialogHeader className="flex flex-col items-start mb-2">
          <div
            className={`${dmSans.style.fontFamily} text-lg font-bold leading-26 tracking-tighter text-left text-gray-900`}
          >
            Installation Code
          </div>
          <DialogDescription
            className={`${dmSans.style.fontFamily} text-base font-normal leading-5 tracking-tighter text-left text-gray-500`}
          >
            Copy & paste the code in any platform to start
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <p
            className={`${dmSans.style.fontFamily} text-base font-medium leading-5 tracking-tighter text-left text-gray-900`}
          >
            Supported Platforms
          </p>
          <div className="flex flex-row gap-0">
            <div className=" p-4 items-center">
              {" "}
              <ShopifySVG />
            </div>
            <div className=" p-4 items-center">
              {" "}
              <WordpressSVG />
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className=" text-gray-900 font-base font-medium leading-normal tracking-tight"
            >
              Name
            </Label>
            <input
              id="name"
              value={name}
              placeholder="e.g. Winter Sale Offer"
              onChange={(e) => setName(e.target.value)}
              className=" h-[40px] w-[528px] rounded-md border border-gray-700 px-3 py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="url"
              className=" text-gray-900 font-base font-medium leading-normal tracking-tight"
            >
              Target URL
            </Label>
            <input
              id="url"
              value={url}
              placeholder="Paste new URL"
              onChange={(e) => setUrl(e.target.value)}
              className=" h-[40px] w-[528px] rounded-md border border-gray-700 px-3 py-2"
            />
          </div> */}
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="code"
            className={`${dmSans.style.fontFamily} text-gray-900 text-base font-medium leading-normal tracking-tight`}
          >
            Code
          </Label>
          <input
            id="code"
            value={inputValue}
            placeholder="code"
            onChange={(e) => {
              setIsCopied(false);
              setInputValue(e.target.value);
            }}
            className={` h-[40px] w-[528px] rounded-[4px] border border-gray-500 px-2 py-3 ${dmSans.style.fontFamily} text-gray-950 text-sm font-normal`}
          />
        </div>
        <DialogFooter className=" my-2">
          <Button className="w-18 h-10 px-4 py-3 flex justify-center items-center gap-2 rounded-[10px]  bg-gray-500 text-white">
            Cancel
          </Button>
          <Button
            onClick={() => handleCopy()}
            className="w-18 h-10 px-4 py-3 flex justify-center items-center gap-2 rounded-[10px]  bg-indigo-400 text-white"
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InstallationCodeModal;
