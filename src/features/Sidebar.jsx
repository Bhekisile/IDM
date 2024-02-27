import DiskSpace from "../ui/DiskSpace";
import MainNav from "./MainNav";

function Sidebar() {
    return (
      <aside className="px-6 py-4 border-r-gray-200 flex flex-col gap-7 bg-slate-800 text-slate-100 border-r border-gray-50">
        <MainNav />
        <DiskSpace />
      </aside>
    )
  }
  
  export default Sidebar;