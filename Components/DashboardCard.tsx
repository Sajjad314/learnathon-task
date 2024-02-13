import CardQuestionIcon from "@/assets/Icon/CardQuestionIcon";
import React from "react";

const DashboardCard = ({
  heading,
  values,
  GraphSVG,
  IconSVG,
}: {
  heading: String;
  values: String;
  GraphSVG: React.ComponentType<any>;
  IconSVG: React.ComponentType<any>;
}) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="flex flex-col flex-grow">
          <div className="h-13 m-[17px] mb-2 flex flex-row">
            <p className="text-purple-300 font-semibold">{heading}</p>
            <div className="mt-1 ml-1">
              <CardQuestionIcon />
            </div>
          </div>
          <div className=" h-21 m-[17px] font-dm-sans font-bold text-[30px] leading-15 tracking-tighter text-left">
            {values}
          </div>
        </div>
        <div className=" m-[17px]">
          <IconSVG />
        </div>
      </div>
      <GraphSVG />
    </div>
  );
};

export default DashboardCard;
