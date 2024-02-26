import HeadingContent from "./HeadingContent";
import MainFiles from "./MainTable";

function MainPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        {/* <Heading>Heading</Heading> */}
        <HeadingContent />
      </div>
      <div>
        <MainFiles />
      </div>
        
      {/* <BookingTable /> */}
    </>
  );
}

export default MainPage;