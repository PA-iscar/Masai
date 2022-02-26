import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../Components/DataApi";
import HomeButton from "../Components/HomeButton";

export const ListItemPage = () => {
  let navigate = useNavigate();
  let params = useParams();
  let data = useRef();
  let [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const getD = async () => {
      data.current = await getData(params.id);
      if (!data.current.id) {
        navigate("/todo/error");
      } else {
        setIsLoading(false);
      }
    };
    getD();
  }, [params.id, navigate]);
  return isloading ? (
    <h2>...Loading</h2>
  ) : (
    <>
      <HomeButton />
      <div>Id: {data.current.id}</div>
      <div>Title: {data.current.title}</div>
      <div>Status: {data.current.status ? "true" : "false"}</div>
    </>
  );
};
