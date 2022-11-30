import React from "react";
import "./loading.scss";

export default function Loader({ data }) {
  return (
    <>
      {!data && (
        <div className="loader">
          <div className="loader-wrapper"></div>
        </div>
      )}
    </>
  );
}
