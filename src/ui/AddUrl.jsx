import { useState } from "react";
import { MdAddLink } from "react-icons/md";
import { HiOutlineCloudArrowDown, HiOutlinePlay, HiOutlineStop } from "react-icons/hi2";
import { TbClockStop } from "react-icons/tb";

function AddUrl() {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
    e.target.reset();
  };

  return (
    <nav className="w-screen flex sm:flex-wrap md:flex-nowrap gap-10 border-b border-slate-700 py-6">
      <form className="w-2/4 gap-4 flex justify-center">
        <label htmlFor="url-input" className="flex items-center">
          <MdAddLink className="w-6 h-6" />
        </label>
        <input
          id="url-input"
          placeholder="Add URL"
          value={url}
          onChange={handleChange}
          className="w-28 sm:w-[400px] rounded-full bg-gray-700 px-4 py-2 text-sm transition-all duration-300 
          placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-gray-50 focus:ring-opacity-50"
        />
            <HiOutlineCloudArrowDown className="w-8 h-8 ml-2" />
      </form>
    
      <div className="flex justify-between items-center w-3/4">
        <ul className="flex justify-between items-center gap-6">
          <li>
            <a href={url} download className="hover:text-violet-400" onClick={handleChange}>
              <HiOutlinePlay className="hover:border-2" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400">
              <HiOutlineStop className="hover:border-2" />
              <span>Stop</span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-violet-400">
            <TbClockStop className="hover:border-2" />
            <span>Stop All</span>
            </a>   
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AddUrl;