// import { Outlet } from "react-router-dom";
import MainPage from "../ui/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
      <div className="appLayout">
        <Header />
        <Sidebar />
        <main className="px-6 py-4 overflow-auto bg-blue-500">
          <div className="appLayout-container">
            {/* <Outlet /> */}
            <MainPage />
          </div>
        </main>
      </div>
    )
  }
  
  export default AppLayout;

//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
//   overflow: scroll;
//   background-color: blue;