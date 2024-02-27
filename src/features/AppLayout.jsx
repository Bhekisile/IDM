import MainPage from "../ui/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
    return (
      <div 
      className="bg-slate-800 text-slate-100 border border-slate-50"
      // className="grid grid-cols-2 grid-rows-2"
      style={{
        display: "grid",
        gridTemplateColumns: "16rem 1fr",
        gridTemplateRows: "8rem 1fr",
        height: "100vh",
      }}
      >
        <Header />
        <Sidebar />
        <main className="px-6 py-4 overflow-auto bg-slate-800 border-slate-50">
          <div 
          // className="appLayout-container"
          className="flex flex-col gap-2 my-auto text-slate-100">
          {/* max-width: 120rem;
  /* 
  gap: 4.2rem;
   */}
            <MainPage />
          </div>
        </main>
      </div>
    )
  }
  
  export default AppLayout;

  // display: grid;
  // grid-template-columns: 16rem 1fr;
  // grid-template-rows: 8rem 1fr;
  // height: 100vh;
  // background-color: red;