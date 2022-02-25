import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editData, getData } from "../Components/DataApi";
import HomeButton from "../Components/HomeButton";

const EditListItem = () => {
  let params = useParams();
  let newTitle = useRef();
  let [data, setData] = useState({});
  let [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getD = async () => {
      const temp = await getData(params.id);
      setData(temp);
      if (!temp.id) {
        navigate("/todo/error");
      } else {
        setIsLoading(false);
      }
    };
    getD();
  }, [params.id, navigate]);

  const toggleStatus = () => {
    setData({ ...data, status: !data.status });
  };

  const confirmEdit = () => {
    setData({ ...data, title: newTitle.current.value });
    editData({ ...data, title: newTitle.current.value });
    newTitle.current.value = "";
  };

  return isloading ? (
    <h2>...Loading</h2>
  ) : (
    <>
      <HomeButton />
      <h1>Edit Task</h1>
      <h3>Id: {data.id}</h3>
      <span>Title: {data.title}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <input type="text" placeholder="Rename task" ref={newTitle} />
      <br />
      <br />
      <span>Status: {data.status ? "true" : "false"}</span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={toggleStatus}>Toggle Status</button>
      <br />
      <br />
      <button onClick={confirmEdit}>Save Changes</button>
    </>
  );
};

export default EditListItem;
