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
    <>
      <form>
        <input
          placeholder="Add Url"
          value={url}
          onChange={handleChange}
          className="w-28 rounded-full bg-gray-700 px-4 py-2 text-sm transition-all duration-300 
        placeholder:text-stone-400 sm:focus:w-72 focus:outline-none focus:ring focus:ring-gray-50
          focus:ring-opacity-50 sm:w-64"
        />
      </form>
      <div className="flex justify-between items-center w-3/4">
      <div className="gap-1 w-2/4 flex">
        <MdAddLink className="w-6 h-6" />
        <span>
          <a href="#">
            <HiOutlineCloudArrowDown className="w-8 h-8" />
          </a>
        </span>
      </div>
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
    </>
  );
}

export default AddUrl;