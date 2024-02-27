import { CiMusicNote1 } from "react-icons/ci";
import { HiOutlineArrowDownOnSquareStack, HiOutlineStop } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaVideoSolid } from "react-icons/lia";
import { MdOutlineBrokenImage } from "react-icons/md";

const mainFiles = [
    {
      checkbox: <input type="checkbox" />,
      name: <MdOutlineBrokenImage />  + "UIUXMonster.png",
      size: '745KB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: <CiMusicNote1 /> + "2pacCover.mp3",
      size: '300MB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: `${<HiOutlineArrowDownOnSquareStack />} UIUXMonster.Zip`,
      size: '1200MB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: `${<IoDocumentTextOutline />} Document.pdf`,
      size: '2MB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: `${<LiaVideoSolid />} BetterCall Saul so2E10.720p.mp3`,
      size: '25GB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: 'Call Of Duty.apk',
      size: '1200MB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: `${<HiOutlineArrowDownOnSquareStack />} 2pacCover.mp3`,
      size: '1200MB',
    },
    {
      checkbox: <input type="checkbox" />,
      name: `${<HiOutlineStop />} Mima.exe`,
      size: '32MB',
    },
  ];

  export default mainFiles;