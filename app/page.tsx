import Card1GraphSVG from "@/assets/Icon/Card1GraphSVG";
import Card1RightIconSVG from "@/assets/Icon/Card1RightIconSVG";
import Card2RightIconSVG from "@/assets/Icon/Card2RightIconSVG";
import Card2GraphSVG from "@/assets/Icon/Card2GraphSVG";
import Card3RightIconSVG from "@/assets/Icon/Card3RightIconSVG";
import Card4GraphSVG from "@/assets/Icon/Card4GraphSVG";
import Card4RightIconSVG from "@/assets/Icon/Graph4RightIConSVG";
import Card3GraphSVG from "@/assets/Icon/Card3GraphSVG";
import DashboardCard from "@/Components/DashboardCard";
import CustomizePopUpModal from "@/Components/CustomizePopUpModal";
import DashboardTable from "@/Components/DashboardTable";
import ColorPicker from "@/Components/ColorPicker";
import Graph from "@/Components/Graph";
import InstallationCodeModal from "@/Components/InstallationCodeModal";
import DateSelectionModal from "@/Components/DateSelectionModal";

export default function Home() {
  return (
    <main className=" min-h-screen flex flex-col">
      <div className="flex flex-1 m-2 ml-4">
        <div className="flex-1 pt-0 p-4 rounded-[10px] mr-2 h-1/2 w-1/2">
          <div className="flex">
            <div className=" h-1/2 w-1/2 rounded-[10px] bg-white ml-0 mt-0 m-[10px]">
              <DashboardCard
                heading={"Views"}
                values={"349"}
                GraphSVG={Card1GraphSVG}
                IconSVG={Card1RightIconSVG}
              />
            </div>
            <div className=" h-1/2 w-1/2 rounded-[10px] bg-white mt-0 m-[10px]">
              <DashboardCard
                heading={"CLicks"}
                values={"243"}
                GraphSVG={Card2GraphSVG}
                IconSVG={Card2RightIconSVG}
              />
            </div>
          </div>
          <div className="flex">
            <div className=" h-1/2 w-1/2 rounded-[10px] bg-white ml-0 m-[10px]">
              <DashboardCard
                heading={"Sign Ups"}
                values={"543"}
                GraphSVG={Card3GraphSVG}
                IconSVG={Card3RightIconSVG}
              />
            </div>
            <div className="h-1/2 w-1/2 rounded-[10px] bg-white m-[10px]">
              <DashboardCard
                heading={"Conversion Rate"}
                values={"27.98%"}
                GraphSVG={Card4GraphSVG}
                IconSVG={Card4RightIconSVG}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 border p-4 bg-white ml-2 h-1/2 w-1/2">
          <CustomizePopUpModal />
          <InstallationCodeModal />
          <DateSelectionModal />
          <ColorPicker />
          {/* <Graph /> */}
        </div>
      </div>
      <div className="flex-1 border p-4 bg-white rounded-[10px] ml-4 m-2 ">
        <DashboardTable />
      </div>
    </main>
  );
}
