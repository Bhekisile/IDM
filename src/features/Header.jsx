import logo from "../assets/idm-logo.jpg";

function Header() {
    return (
      <header className="px-8 py-4 flex items-center sm:flex-wrap md:flex-nowrap col-span-full gap-6 border-b border-stone-700">
        <nav>
          <div className="flex gap-4 mt-2">
            <img className="w-8 h-8" src={logo} alt="Logo" />
            Internet Download Manager 10.36
          </div>
          <ul className="flex gap-4 mt-4 text-stone-300">
            <li className="hover:bg-slate-600">
              <span>Tasks</span>
            </li>
            <li className="hover:bg-slate-600">
              <span>File</span>
            </li>
            <li className="hover:bg-slate-600">
             <span>Downloads</span>
            </li>
            <li className="hover:bg-slate-600">
              <span>View</span>
            </li>
            <li className="hover:bg-slate-600">
              <span>Help</span>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header;