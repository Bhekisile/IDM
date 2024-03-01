import { useState } from "react";
import { HiOutlineDocumentArrowDown, HiOutlineClipboardDocument, HiOutlineDocumentCheck, HiChevronUp, HiChevronDown, HiOutlineStop, HiOutlineArrowDownOnSquareStack } from "react-icons/hi2";
import { CiMusicNote1 } from "react-icons/ci";
import { LiaVideoSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineBrokenImage } from "react-icons/md";
import apk from "../assets/Apk.png";

function MainNav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((open) => !open);
  }

    return (
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4 sm:gap-1">
            <HiOutlineClipboardDocument /><span>All Downloads</span>
            <button className="btn-toggle" onClick={handleClick}>
              {isOpen ? <HiChevronUp /> : <HiChevronDown />}
            </button>
          </li>
          {isOpen && (
            <ul className="ml-8">
              <li className="flex-list mb-2"><CiMusicNote1 /><span className="text-stone-300">Musics</span></li>
              <li className="flex-list mb-2"><HiOutlineArrowDownOnSquareStack />
                <span className="text-stone-300">Compressed</span></li>
              <li className="flex-list mb-2"><LiaVideoSolid /><span className="text-stone-300">Videos</span></li>
              <li className="flex-list mb-2"><HiOutlineStop /><span className="text-stone-300">Programs</span></li>
              <li className="flex-list mb-2"><IoDocumentTextOutline /><span className="text-stone-300">Documents</span></li>
              <li className="flex-list mb-2"><img src={apk} alt="icons" className="w-[12px] h-[12px]" /><span className="text-stone-300">APKs</span></li>
              <li className="flex-list mb-2"><MdOutlineBrokenImage /><span className="text-stone-300">Images</span></li>
            </ul>
          )}
          <li className="flex items-center gap-4 sm:gap-1">
            <HiOutlineDocumentArrowDown /><span>Unfinished</span>
            <button className="btn-toggle">
            <HiChevronDown />
            </button>
          </li>
          <li className="flex items-center gap-4 sm:gap-1">
            <HiOutlineDocumentCheck /><span>Finished</span>
            <button className="btn-toggle">
            <HiChevronDown />
            </button>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default MainNav;
