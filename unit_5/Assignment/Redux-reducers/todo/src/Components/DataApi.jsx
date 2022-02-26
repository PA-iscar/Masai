export const getData = async (id = "") => {
  let data = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  data = await data.json();

  return data;
};
export const putData = async (payload) => {
  let data = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  data = await data.json();

  return data;
};
export const editData = async (payload) => {
  let data = await fetch(`http://localhost:3000/tasks/${payload.id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  data = await data.json();

  return data;
};
export const removeData = async (id = "") => {
  let data = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  data = await data.json();

  return data;
};
