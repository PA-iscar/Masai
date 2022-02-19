const DataApi = async ({ data, method }) => {
  //   console.log(data, method);
  if (method === "POST") {
    fetch("http://localhost:3000/users", {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // res = await res.json();
    // console.log(res);
  }
  if (method === "GET") {
    let res = await fetch("http://localhost:3000/users", {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
    });
    res = await res.json();
    return res;
  }
};

export default DataApi;
