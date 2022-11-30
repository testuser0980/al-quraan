import React from "react";

export default function Card({ data, onClickHandler }) {
  return (
    <>
      {data &&
        data.map((curElem) => {
          const { number, name, revelation } = curElem;
          const { long } = name;
          const { arab } = revelation;
          return (
            <div className="col-lg-3 col-md-4 col-sm-12" key={number}>
              <div className="card p-2 mb-5">
                <div className="play-icon">
                  <div className="play-icon-wrapper">
                    <button
                      className="fas fa-play"
                      name={long}
                      value={number}
                      onClick={(e) => onClickHandler(e)}
                    ></button>
                  </div>
                </div>
                <div className="surah-info pt-5">
                  <h5>{long}</h5>
                  <small>{arab}</small>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
