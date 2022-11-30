import React, { useState } from "react";
import apiContext from "./apiContext";

export default function APIState(props) {
  const [data, setData] = useState([]);
  const [verses, setVerses] = useState([]);
  const fetchAllData = async () => {
    const url = "https://api.quran.gading.dev/surah";
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setData(res.data);
  };
  const fetchDataWithSurahNumber = async (value) => {
    const url = "https://api.quran.gading.dev/surah/" + value;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setVerses(res.data.verses);
  };
  return (
    <apiContext.Provider
      value={{ fetchAllData, data, fetchDataWithSurahNumber, verses }}
    >
      {props.children}
    </apiContext.Provider>
  );
}
