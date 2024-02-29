import AddUrl from "./AddUrl";
import MainFiles from "./MainTable";

function MainPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <AddUrl />
      </div>
      <div>
        <MainFiles />
      </div>
    </>
  );
}

export default MainPage;