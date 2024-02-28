import logo from "../assets/idm-logo.jpg";

function Header() {
    return (
      <header className="px-8 py-4 flex items-center  col-span-full gap-6 border-b border-slate-50">
        <nav>
          <div className="flex gap-4 mt-2">
            <img className="w-8 h-8" src={logo} alt="Logo" />
            Internet Download Manager 10.36
          </div>
          <ul className="flex gap-4 mt-4">
            <li className="hover:bg-indigo-300">
              <span>Tasks</span>
            </li>
            <li className="hover:bg-indigo-300">
              <span>File</span>
            </li>
            <li className="hover:bg-indigo-300">
             <span>Downloads</span>
            </li>
            <li className="hover:bg-indigo-300">
              <span>View</span>
            </li>
            <li className="hover:bg-indigo-300">
              <span>Help</span>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header;