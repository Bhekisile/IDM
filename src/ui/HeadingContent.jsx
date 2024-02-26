import { HiOutlinePlay, HiOutlineStop, HiOutlineCloudArrowDown } from "react-icons/hi2";
import { TbClockStop } from "react-icons/tb";
import AddUrl from "./AddUrl";
import { MdAddLink } from "react-icons/md";


function HeadingContent() {
  return (
    <div className="flex justify-between items-center w-screen">
      <div className="gap-1"><MdAddLink /><AddUrl /> <HiOutlineCloudArrowDown /></div>
      <ul className="flex justify-between items-center gap-6">
        <li><HiOutlinePlay /><span>Resume</span></li>
        <li><HiOutlineStop /><span>Stop</span></li>
        <li><TbClockStop /><span>Stop All</span></li>
      </ul> 
    </div>
  )
}

export default HeadingContent;
