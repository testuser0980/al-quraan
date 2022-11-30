import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";

import { WaveformContianer, Wave, PlayButton } from "./waveform.styled";

class Waveform extends Component {
  componentDidMount() {
    const track = document.querySelector("#track");

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#2D5BFF",
      responsive: true,
      waveColor: "#EFEFEF",
      cursorColor: "transparent",
    });

    this.waveform.load(track);
  }

  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };

  render() {
    const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";
    return (
      <WaveformContianer>
        <Wave id="waveform" />
        <PlayButton onClick={this.handlePlay}>
          {!this.state.playing ? "Play" : "Pause"}
        </PlayButton>
        <audio
          id="track"
          src={url}
          autoPlay={this.waveform.play}
          onEndedHandler={this.props.onEndedHandler}
        />
      </WaveformContianer>
    );
  }
}

export default Waveform;
