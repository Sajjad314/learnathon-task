import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import PopTrigg from "../assets/PopTrigg - favicon.png";
import TrendUp from "../assets/trend.png";
import Maximize from "../assets/maximize.png";
import settings from "../assets/settings.png";
import TaskBox from "@/assets/Icon/TaskBox";
import TrendupSVG from "@/assets/Icon/TrendupSVG";
import MaximizeSVG from "@/assets/Icon/MaximizeSVG";
import SettingsSVG from "@/assets/Icon/SettingsSVG";

export default async function SideNav() {
  return (
    <div className="w-[60px] bg-white flex flex-col">
      <div className=" mt-5 flex flex-col items-center gap-[35px]">
        <Link href="/dashboard">
          <Image src={PopTrigg} alt="H Icon" width={36} height={36} />
        </Link>
        <Link href="/dashboard">
          <TrendupSVG />
        </Link>
        <Link href="/dashboard">
          <MaximizeSVG />
        </Link>
        <Link href="/dashboard">
          <TaskBox />
        </Link>
      </div>

      <div className="mt-auto px-3 py-5 flex items-center justify-center border-t border-solid">
        <Link href="/dashboard">
          <SettingsSVG />
        </Link>
      </div>
    </div>
  );
}
