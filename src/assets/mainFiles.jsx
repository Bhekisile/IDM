import { CiMusicNote1 } from "react-icons/ci";
import { HiOutlineArrowDownOnSquareStack, HiOutlineStop } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaVideoSolid } from "react-icons/lia";
import { MdOutlineBrokenImage } from "react-icons/md";
import apk from "./Apk.png";

const mainFiles = [
    {
      id: "01",
      name: <><span className="gap-1"><MdOutlineBrokenImage /></span> UIUXMonster.png</>,
      size: '745KB',
    },
    {
      id: "02",
      name: <><CiMusicNote1 /> 2pacCover.mp3</>,
      size: '300MB',
    },
    {
      id: "03",
      name: <><HiOutlineArrowDownOnSquareStack /> UIUXMonster.Zip</>,
      size: '1200MB',
    },
    {
      id: "04",
      name: <><IoDocumentTextOutline /> Document.pdf</>,
      size: '2MB',
    },
    {
      id: "05",
      name: <><LiaVideoSolid /> BetterCall Saul so2E10.720p.mp3</>,
      size: '25GB',
    },
    {
      id: "06",
      name: <><img src={apk} alt="icons" className="w-[12px] h-[12px]" /> Call Of Duty.apk</>,
      size: '1200MB',
    },
    {
      id: "07",
      name: <><HiOutlineArrowDownOnSquareStack /> 2pacCover.mp3</>,
      size: '1200MB',
    },
    {
      id: "08",
      name: <><HiOutlineStop /> Mima.exe</>,
      size: '32MB',
    },
  ];

  export default mainFiles;