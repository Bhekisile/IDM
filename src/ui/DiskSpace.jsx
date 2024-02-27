import { HiEllipsisVertical } from "react-icons/hi2";
import { GoCodespaces } from "react-icons/go";

function DiskSpace() {
    // const [isLoading, setIsLoading] = useState(false);
  
    return (
      <div className="bg-slate-700 p-4 rounded-3xl flex flex-col gap-2 mt-auto text-center text-sm">
        <ul className="flex justify-between items-center gap-6 text-slate-100">
          <li className="flex justify-between items-center gap-2"><GoCodespaces /><span>Disk Space</span></li>
          <li><HiEllipsisVertical /></li>
        </ul>
        <div className="text-slate-100">
          <h1>90%</h1>
          <p>C:/Downloads</p>
        </div>
        <button
            type="button"
            className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full text-slate-100 text-sm h-10"
          >
            Disk Cleaner
          </button>
      </div>
    );
  }
  
  export default DiskSpace;