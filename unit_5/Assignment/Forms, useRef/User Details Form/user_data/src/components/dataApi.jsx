const DataApi = async ({
  data,
  method,
  page = 1,
  limit = 5,
  dep = "none",
  order = "none",
}) => {
  const url = "http://localhost:3000/users";
  let sort = "";
  let filter = "";
  if (dep !== "none") {
    filter = `&department=${dep}`;
  } else {
    filter = "";
  }
  if (order !== "none") {
    sort = `&_sort=salary&_order=${order}`;
  } else {
    sort = "";
  }
  // console.log(data, method, page, limit, dep, order);
  if (method === "POST") {
    fetch(`${url}`, {
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
    let res = await fetch(
      `${url}?_page=${page}&_limit=${limit}${filter}${sort}`,
      {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    res = await res.json();
    return res;
  }
  if (method === "DELETE") {
    fetch(`${url}/${data}`, {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
    });
  }
};

export default DataApi;
