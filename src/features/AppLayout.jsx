import MainPage from "../ui/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled, { css } from 'styled-components';

const device = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
}

const media = {
  xs: (...args) => css`
    @media (max-width: ${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${device.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: ${device.md, device.lg, device.xl, device.xxl}) {
      ${css(...args)};
    }
  `,
}

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-rows: "8rem 1fr";
  height: "100vh";

  ${media.sm`
  grid-template-columns: 12rem 1fr;
  font-size: 12px;
  `}
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