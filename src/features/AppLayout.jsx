import MainPage from "../ui/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
      <div 
      className="bg-slate-800 text-slate-100 border border-slate-50 sm:flex-wrap md:flex-nowrap overflow-scroll"
      style={{
        display: "grid",
        gridTemplateColumns: "16rem 1fr",
        gridTemplateRows: "8rem 1fr",
        height: "100vh",
      }}
      >
        <Header />
        <Sidebar />
        <main className="py-4 overflow-auto bg-slate-800">
          <div 
          className="flex flex-col gap-2 my-auto text-slate-100">

            <MainPage />
          </div>
        </main>
      </div>
    )
  }
  
  export default AppLayout;