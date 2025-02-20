import { useState } from "react";
import "./App.css";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

function App() {
  const [data, setData] = useState({
    mobileNumber: "",
    name: "",
    birthday: "",
    email: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data)
  return (
    <>
      {currentPage === 1 && (
        <PageOne nextPage={() => setCurrentPage(2)} setData={setData} />
      )}
      {currentPage === 2 && (
        <PageTwo nextPage={() => setCurrentPage(3)} setData={setData} />
      )}
      {currentPage === 3 && <PageThree data={data} />}
    </>
  );
}

export default App;
