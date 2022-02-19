import Form from "./components/form";
import Table from "./components/table";
import React, { useState } from "react";
function App() {
  const [refresh, setRefresh] = useState(true);
  return (
    <>
      <Form setRefresh={setRefresh} />
      <Table refresh={refresh} setRefresh={setRefresh} />
    </>
  );
}

export default App;
