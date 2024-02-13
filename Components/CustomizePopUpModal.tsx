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

const CustomizePopUpModal = () => {
  const [name, setName] = useState<string>();
  const [url, setUrl] = useState<string>();

  const handleSubmit = () => {
    console.log("Submitted ", name, url);
    // You can do further processing, such as sending the form data to an API
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="flex flex-col items-start gap-2">
            <div className="font-dm-sans font-bold text-[20px] leading-normal tracking-tight text-gray-900">
              Customize Popup
            </div>
            <DialogDescription className="font-dm-sans text-base font-normal leading-normal tracking-tight text-gray-500">
              Add the name and URL before for better experience
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-4">
            <div className="flex flex-col gap-2">
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
            </div>
          </div>
          <DialogFooter className=" my-4">
            <Button className="w-24 h-10 px-3 py-4 flex justify-center items-center gap-2 rounded-[10px]  bg-gray-500 text-white">
              Cancel
            </Button>
            <Button
              type="submit"
              className="w-24 h-10 px-3 py-4 flex justify-center items-center gap-2 rounded-[10px]  bg-indigo-400 text-white"
            >
              Proceed
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomizePopUpModal;
