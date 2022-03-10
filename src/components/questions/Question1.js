/*
 * File name: Question1.js
 * Purpose: For the the Question1 page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React, { useState, useEffect } from "react";

//This page renders only information of one country.
export default function Question1() {
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    setCountryInfo(
      <div style={{ textAlign: "center" }}>
        <progress max="100"></progress>
      </div>
    );

    fetch("https://restcountries.com/v3.1/name/malta")
      .then((response) => response.text())
      .then((data) => setCountryInfo(data));
  }, []);

  return countryInfo;
}
