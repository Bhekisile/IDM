import logo from "../assets/idm-logo.jpg";

function Header() {
    return (
      <header className="px-8 py-4 flex items-center col-span-full gap-6 border-b-gray-200">
        <nav>
          <div className="flex gap-4 mt-2">
            <img className="w-8 h-8" src={logo} alt="Logo" />
            Internet Download Manager 10.36
          </div>
          <ul className="flex gap-4 mt-4">
            <li>
              <span>Tasks</span>
            </li>
            <li>
              <span>File</span>
            </li>
            <li>
             <span>Downloads</span>
            </li>
            <li>
              <span>View</span>
            </li>
            <li>
              <span>Help</span>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header;