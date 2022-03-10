/*
 * File name: index.js
 * Purpose: For the the first page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Question1 from "./components/questions/Question1";
import Question2 from "./components/questions/Question2";
import Question3 from "./components/questions/Question3";
import Question4 from "./components/questions/Question4";
import SQLQuestion1 from "./components/questions/SQLQuestion1";
import SQLQuestion2 from "./components/questions/SQLQuestion2";
import Header from "./components/Header";

export default function Home() {
  const button_style = { width: 200, height: 50, fontSize: 20, marginTop: 50 };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() =>
          ReactDOM.render(<Question1 />, document.getElementById("root"))
        }
        style={button_style}
      >
        Question1
      </button>
      <br />
      <button
        onClick={() =>
          ReactDOM.render(<Question2 />, document.getElementById("root"))
        }
        style={button_style}
      >
        Question2
      </button>
      <br />
      <button
        onClick={() =>
          ReactDOM.render(<Question3 />, document.getElementById("root"))
        }
        style={button_style}
      >
        Question3
      </button>
      <br />
      <button
        onClick={() =>
          ReactDOM.render(<Question4 />, document.getElementById("root"))
        }
        style={button_style}
      >
        Question4
      </button>
      <br />
      <button
        onClick={() =>
          ReactDOM.render(<SQLQuestion1 />, document.getElementById("root"))
        }
        style={button_style}
      >
        SQL Question1
      </button>
      <br />
      <button
        onClick={() =>
          ReactDOM.render(<SQLQuestion2 />, document.getElementById("root"))
        }
        style={button_style}
      >
        SQL Question2
      </button>
      <br />
    </div>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
ReactDOM.render(<Header />, document.getElementById("header"));
