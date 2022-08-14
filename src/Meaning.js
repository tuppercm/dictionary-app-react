import React from "react";
import Synonymns from "./Synonymns";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
            </p>
            <Synonymns synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
