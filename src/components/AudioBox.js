import React from "react";
import $ from "jquery";
import swal from "sweetalert";

export default function AudioBox({ verses }) {
  const verseAudios = [];
  const ayahText = [];
  const versesData =
    verses &&
    verses.map((curElem) => {
      const { audio } = curElem;
      const { primary } = audio;
      return primary;
    });
  const versesDataText =
    verses &&
    verses.map((curElem) => {
      const { text } = curElem;
      const { arab } = text;
      return arab;
    });
  verseAudios.push(versesData);
  ayahText.push(versesDataText);
  let indexVal = 0;
  changeAudio(indexVal);
  const onEndedHandler = () => {
    indexVal++;

    // console.log(indexVal);
    if (indexVal < verseAudios[0].length) {
      changeAudio(indexVal);
    } else {
      indexVal = 0;
      changeAudio(indexVal);
      swal({
        title: "Good job!",
        text: "Surah has been completed.",
        icon: "success",
      });
      document.querySelector("audio").pause();
    }
  };

  function changeAudio(index) {
    $("audio").attr("src", verseAudios && verseAudios[0][index]);
    $("h4").text(versesDataText && versesDataText[index]);
    $(".played").text(index + 1);
    $(".remaining").text(versesDataText && verseAudios[0].length - (index + 1));
  }
  return (
    <>
      <div className="audio-box">
        <div className="container">
          <div className="totals">
            <p className="text-white">
              Total Ayahs:{" "}
              <small style={{ fontWeight: "bold" }}>
                {verseAudios && verseAudios[0].length}
              </small>
            </p>
            <p className="text-white">
              Played Ayahs:{" "}
              <small className="played" style={{ fontWeight: "bold" }}>
                {indexVal + 1}
              </small>
            </p>
            <p className="text-white">
              Remaining Ayahs:{" "}
              <small className="remaining" style={{ fontWeight: "bold" }}>
                {verseAudios[0].length - 1}
              </small>
            </p>
          </div>
          <h4 className="text-white"></h4>
          <audio
            controls
            src={verseAudios[0][0]}
            onEnded={() => onEndedHandler()}
            autoPlay
          ></audio>
        </div>
      </div>
    </>
  );
}
