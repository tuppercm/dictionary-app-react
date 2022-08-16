import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.text && props.phonetics.audio) {
    return (
      <div className="Phonetics">
        {props.phonetics.text}:{" "}
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else if (props.phonetics.text) {
    return <div className="Phonetics">{props.phonetics.text}</div>;
  } else if (props.phonetics.audio) {
    return (
      <div className="Phonetics">
        {" "}
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
