import React from "react";

export default function Synonymns(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonymns">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
