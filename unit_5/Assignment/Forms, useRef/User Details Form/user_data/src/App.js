import { useState, useEffect } from "react";
import Form from "./components/form";
import Table from "./components/table";
import DataApi from "./components/dataApi";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const data = DataApi({ method: "GET" });
    data.then((d) => setUserData(d));
  });
  return (
    <>
      <Form />
      <Table userData={userData} />
    </>
  );
}

export default App;
