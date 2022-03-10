/*
 * File name: Question4.js
 * Purpose: For the the Question4 page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

//You have 20 coins at first. Press the "START" button, and then, the game starts.
//Press the red button of each in order to stop each reel.

import React, { useState } from "react";

export default function Question4() {
  const [coin, setCoin] = useState(20);

  const reel1_array = [
    "cherry",
    "lemon",
    "apple",
    "lemon",
    "banana",
    "banana",
    "lemon",
    "lemon",
  ];
  const reel2_array = [
    "lemon",
    "apple",
    "lemon",
    "lemon",
    "cherry",
    "apple",
    "banana",
    "lemon",
  ];
  const reel3_array = [
    "lemon",
    "apple",
    "lemon",
    "apple",
    "cherry",
    "lemon",
    "banana",
    "lemon",
  ];

  const [stopButton1, setStopButton1] = useState(
    <button
      className="slot_button"
      onClick={() => stop_reel(1)}
      disabled
    ></button>
  );
  const [stopButton2, setStopButton2] = useState(
    <button
      className="slot_button"
      onClick={() => stop_reel(2)}
      disabled
    ></button>
  );
  const [stopButton3, setStopButton3] = useState(
    <button
      className="slot_button"
      onClick={() => stop_reel(3)}
      disabled
    ></button>
  );

  const [reel1, setReel1] = useState("cherry");
  const [reel2, setReel2] = useState("lemon");
  const [reel3, setReel3] = useState("apple");

  const [resultArray, setResultArray] = useState([]);

  const start_game = () => {
    if (coin === 0) {
      alert("You don't hava a coin.");
      return;
    }

    if (resultArray.length === 0) {
      setCoin(coin - 1);
      setResultArray([]);
      setStopButton1(
        <button className="slot_button" onClick={() => stop_reel(1)}></button>
      );
      setStopButton2(
        <button className="slot_button" onClick={() => stop_reel(2)}></button>
      );
      setStopButton3(
        <button className="slot_button" onClick={() => stop_reel(3)}></button>
      );
      setReel1(<progress max="100" className="slot_progress"></progress>);
      setReel2(<progress max="100" className="slot_progress"></progress>);
      setReel3(<progress max="100" className="slot_progress"></progress>);
    }
  };

  const stop_reel = (num) => {
    if (num === 1) {
      setStopButton1(
        <button
          className="slot_button"
          onClick={() => stop_reel(1)}
          disabled
        ></button>
      );
      const ree1_result = reel1_array[Math.floor(Math.random() * 8)];
      setReel1(ree1_result);
      let temp_array = resultArray;
      temp_array.push(ree1_result);
      setResultArray(temp_array);
    } else if (num === 2) {
      setStopButton2(
        <button
          className="slot_button"
          onClick={() => stop_reel(2)}
          disabled
        ></button>
      );
      const ree2_result = reel2_array[Math.floor(Math.random() * 8)];
      setReel2(ree2_result);
      let temp_array = resultArray;
      temp_array.push(ree2_result);
      setResultArray(temp_array);
    } else if (num === 3) {
      setStopButton3(
        <button
          className="slot_button"
          onClick={() => stop_reel(3)}
          disabled
        ></button>
      );
      const ree3_result = reel3_array[Math.floor(Math.random() * 8)];
      setReel3(ree3_result);
      let temp_array = resultArray;
      temp_array.push(ree3_result);
      setResultArray(temp_array);
    }

    if (resultArray.length === 3) {
      if (resultArray.filter((n) => n === "cherry").length === 3) {
        setCoin(coin + 50);
      } else if (resultArray.filter((n) => n === "cherry").length === 2) {
        setCoin(coin + 40);
      } else if (resultArray.filter((n) => n === "apple").length === 3) {
        setCoin(coin + 20);
      } else if (resultArray.filter((n) => n === "apple").length === 2) {
        setCoin(coin + 10);
      } else if (resultArray.filter((n) => n === "banana").length === 3) {
        setCoin(coin + 15);
      } else if (resultArray.filter((n) => n === "banana").length === 2) {
        setCoin(coin + 5);
      } else if (resultArray.filter((n) => n === "lemon").length === 3) {
        setCoin(coin + 3);
      }

      setResultArray([]);
    }
  };

  return (
    <>
      <div
        style={{ textAlign: "right", marginRight: "80px", fontSize: "22px" }}
      >
        Your coin: {coin}
      </div>
      <div style={{ textAlign: "right", marginTop: 60, marginRight: 250 }}>
        <button style={{ fontSize: "20px" }} onClick={() => start_game()}>
          START
        </button>
      </div>
      <div style={{ marginTop: 20 }} className="f-container">
        <div className="reel">
          <div className="reel_content">{reel1}</div>
        </div>
        <div className="reel">
          <div className="reel_content">{reel2}</div>
        </div>
        <div className="reel">
          <div className="reel_content">{reel3}</div>
        </div>
      </div>
      <div style={{ marginTop: 20 }} className="f-container">
        <div className="slot_button_div">{stopButton1}</div>
        <div className="slot_button_div">{stopButton2}</div>
        <div className="slot_button_div">{stopButton3}</div>
      </div>

      <div class="text-center-text-left-wrap">
        <ul class="text-center-text-left__child">
          <li>3 cherries in a row: won 50 coins</li>
          <li>2 cherries in a row: won 40 coins</li>
          <li>3 Apples in a row: won 20 coins</li>
          <li>2 Apples in a row: won 10 coins</li>
          <li>3 Bananas in a row: won 15 coins</li>
          <li>2 Bananas in a row: won 5 coins</li>
          <li>3 lemons in a row: won 3 coins</li>
        </ul>
      </div>
    </>
  );
}
