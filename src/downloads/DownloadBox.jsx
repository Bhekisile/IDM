// import { useState } from "react";
// import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
// import DownloadFiles from "./DownloadFiles";

// export default function DownloadBox() {
//     const [isOpen, setIsOpen] = useState(true);
  
//     return (
//       <div>
//         <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
//           {isOpen ? <HiChevronUp /> : <HiChevronDown />}
//         </button>
  
//         {isOpen && <DownloadFiles />}
//       </div>
//     );
//   }