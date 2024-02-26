import MainNav from "./MainNav";

function Sidebar() {
    return (
      <aside className="bg-gray-50 px-6 py-4 border-r-gray-200 flex flex-col gap-7">
        <MainNav />
      </aside>
    )
  }
  
  export default Sidebar;

//   const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 2.4rem;
//   border-right: 1px solid var(--color-grey-200);

//   /* grid-row: 1/-1; */
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;