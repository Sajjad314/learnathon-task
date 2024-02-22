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

import "react-datepicker/dist/react-datepicker.css";
import { DateTimePicker } from "./ui/dateTimePicker/date-time-picker";

const DateSelectionModal = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date: any) => {
    setSelectedDate(date);
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
        <div>
          <h2>Date and Time Picker</h2>
          {/* <DateTimePicker label={"date"}/> */}
          <DateTimePicker granularity={"minute"} />
        </div>
        <DialogFooter className=" my-2"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DateSelectionModal;
