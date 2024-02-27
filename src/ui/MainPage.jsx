import HeadingContent from "./HeadingContent";
import MainFiles from "./MainTable";

function MainPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <HeadingContent />
      </div>
      <div>
        <MainFiles />
      </div>
    </>
  );
}

export default MainPage;