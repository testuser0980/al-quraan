import React, { useContext, useEffect } from "react";
import apiContext from "../context/apiContext";
import AudioBox from "./AudioBox";
import Card from "./Card";
import Loader from "./Loader";
import "./style.scss";

export default function GetData() {
  const context = useContext(apiContext);
  const { fetchAllData, data, fetchDataWithSurahNumber, verses } = context;
  const onClickHandler = (e) => {
    fetchDataWithSurahNumber(e.target.value);
  };
  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AudioBox verses={verses} />
      <div className="container my-5">
        <div className="row">
          {!data ? (
            <Loader data={data} />
          ) : (
            <Card data={data} onClickHandler={onClickHandler} />
          )}
        </div>
      </div>
    </>
  );
}
