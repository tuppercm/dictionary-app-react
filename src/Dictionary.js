import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to learn about today?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              autoFocus={true}
              onChange={updateKeyword}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
