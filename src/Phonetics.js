import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.text && props.phonetics.audio) {
    return (
      <div className="Phonetics">
        <a
          href={props.phonetics.audio}
          target="_blank"
          rel="noreferrer"
          title="Listen"
        >
          ▶️
        </a>
        <span className="text">{props.phonetics.text}</span>
      </div>
    );
  } else if (props.phonetics.text) {
    return (
      <div className="Phonetics">
        <span className="text">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
