import React from "react";
import "./Synonyms.css";

export default function Synonymns(props) {
  if (props.synonyms.length) {
    return (
      <div>
        <ul className="Synonymns">
          Synonymns:{" "}
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
