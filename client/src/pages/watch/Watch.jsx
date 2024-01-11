import { ArrowBackIosNew } from "@mui/icons-material";
import React from "react";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosNew />
        Home
      </div>
      <video
        className="video"
        src="../../../React Netflix Movie App Design Tutorial _ React UI Full Course for Beginners.mp4"
        autoPlay
        controls
        progress
      ></video>
    </div>
  );
}
