import MainPage from "../ui/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-rows: "8rem 1fr";
  height: "100vh";
`;

function AppLayout() {
    return (
      <StyledAppLayout 
      className="bg-slate-800 text-slate-100 border border-slate-50 overflow-scroll"
      >
        <Header />
        <Sidebar />
        <main className="py-4 overflow-auto bg-slate-800">
          <div 
          className="flex flex-col gap-2 my-auto text-slate-100">

            <MainPage />
          </div>
        </main>
      </StyledAppLayout>
    )
  }
  
  export default AppLayout;