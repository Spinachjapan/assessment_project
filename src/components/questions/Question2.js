/*
 * File name: Question2.js
 * Purpose: For the the Question2 page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React, { useState } from "react";

export default function Question2() {
  const [countryNameInput, setCountryNameInput] = useState(null);
  const [result, setResult] = useState([]);
  const [progress, setProgree] = useState(null);

  const inputStyle = { fontSize: 20, border: "2px solid blue" };

  //Input the name and click "SEARCH", and then, country's names are shown.
  const search_country = () => {
    setProgree(
      <div style={{ textAlign: "center" }}>
        <progress max="100"></progress>
      </div>
    );

    fetch("https://restcountries.com/v3.1/name/" + countryNameInput)
      .then((response) => response.json())
      .then((data) => {
        if (data.length != 0) {
          let temp_array = [];
          data.map((value) => temp_array.push(value["name"]["common"]));
          setProgree(null);
          setResult(temp_array);
        }
      })
      .catch((error) => {
        setProgree(null);
        setResult([]);
      });
  };

  return (
    <table align="center" style={{ marginTop: 100, fontSize: 20 }}>
      <tbody>
        <input
          style={inputStyle}
          type="text"
          onChange={(e) => setCountryNameInput(e.target.value)}
        />
        <input
          style={{ fontSize: "20px" }}
          onClick={() => search_country()}
          type="button"
          value="SEARCE"
        />
        {progress}
        <div style={{ marginTop: 30 }}>{result.length} countries hit!</div>
        {result.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </tbody>
    </table>
  );
}
