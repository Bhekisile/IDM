// import { MdAddLink } from "react-icons/md";


function AddUrl() {
  return (
    <form>
      <input
      placeholder= "Add Url"
    //   placeholder= {<MdAddLink />} Add Url
    //   value={query}
    //   onChange={(e) => setQuery(e.target.value)}
      className="w-28 rounded-full bg-gray-100 px-4 py-2 text-sm transition-all duration-300 
      placeholder:text-stone-400 sm:focus:w-72 focus:outline-none focus:ring focus:ring-gray-50
      focus:ring-opacity-50 sm:w-64"
      />
    </form>
  )
}

export default AddUrl;
