import { useState } from "react";
import Form from "./components/form";
import Table from "./components/table";

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <>
      <Form setUserData={setUserData} />
      <Table userData={userData} />
    </>
  );
}

export default App;
