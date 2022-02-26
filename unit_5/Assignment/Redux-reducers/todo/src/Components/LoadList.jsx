import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reloadList } from "../Redux/todo/todo.actions";
import { getData } from "./DataApi";

const Load = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Reloading");
    const getD = async () => {
      let data = await getData();
      const reloadListAction = reloadList(data);
      dispatch(reloadListAction);
    };
    getD();
  }, [dispatch]);
  return <></>;
};

export default Load;
