import { useState } from "react";
import { HiOutlineDocumentArrowDown, HiOutlineClipboardDocument, HiOutlineDocumentCheck, HiChevronUp, HiChevronDown, HiOutlineStop, HiOutlineArrowDownOnSquareStack } from "react-icons/hi2";
import { CiMusicNote1 } from "react-icons/ci";
import { LiaVideoSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineBrokenImage } from "react-icons/md";
// import DownloadBox from "../downloads/DownloadBox";


function MainNav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((open) => !open);
  }

    return (
      <nav>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4">
            <HiOutlineClipboardDocument /><span>All Downloads</span>
            <button className="btn-toggle" onClick={handleClick}>
              {isOpen ? <HiChevronUp /> : <HiChevronDown />}
            </button>
          </li>
          {isOpen && (
            <ul className="ml-8">
              <li className="flex-list"><CiMusicNote1 /><span>Musics</span></li>
              <li className="flex-list"><HiOutlineArrowDownOnSquareStack />
                <span>Compressed</span></li>
              <li className="flex-list"><LiaVideoSolid /><span>Videos</span></li>
              <li className="flex-list"><HiOutlineStop /><span>Programs</span></li>
              <li className="flex-list"><IoDocumentTextOutline /><span>Documents</span></li>
              <li className="flex-list">APKs</li>
              <li className="flex-list"><MdOutlineBrokenImage />Images</li>
            </ul>
          )}
          <li className="flex items-center gap-4">
            <HiOutlineDocumentArrowDown /><span>Unfinished</span>
            <button className="btn-toggle">
            <HiChevronDown />
            </button>
          </li>
          <li className="flex items-center gap-4">
            <HiOutlineDocumentCheck /><span>Finished</span>
            <button className="btn-toggle">
            <HiChevronDown />
            </button>
            {/* <StyledNavLink><HiOutlineDocumentCheck /><span>Finished</span></StyledNavLink> */}
          </li>
        </ul>
      </nav>
    )
  }
  
  export default MainNav;
