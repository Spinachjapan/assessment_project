/*
 * File name: Header.js
 * Purpose: For the the header part rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React from "react";
import ReactDOM from "react-dom";
import Home from "..";

export default function Header() {
  let login_state = (
    <ul className="lap">
      <li>
        <a
          href="#"
          className="a"
          onClick={() =>
            ReactDOM.render(<Home />, document.getElementById("root"))
          }
        >
          HOME
        </a>
      </li>
      <li>
        <a
          className="a"
          href="./KOHEI_KABURAKI_resume.docx"
          download="./KOHEI_KABURAKI_resume.docx"
        >
          RESUME
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kohei-kaburaki-685910229/"
          className="a"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );

  //If the window is shrunk, the menu is input in humbergar.

  let login_state_hidden = (
    <div className="hidden_menu">
      <div>
        <a
          href="#"
          className="a"
          onClick={() =>
            ReactDOM.render(<Home />, document.getElementById("root"))
          }
        >
          HOME
        </a>
      </div>
      <div>
        <a
          className="a"
          href="./KOHEI_KABURAKI_resume.docx"
          download="./KOHEI_KABURAKI_resume.docx"
        >
          RESUME
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/kohei-kaburaki-685910229/"
          className="a"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );

  return (
    <header className="header">
      <div className="logo">
        <a
          href="#"
          className="a"
          onClick={() =>
            ReactDOM.render(<Home />, document.getElementById("root"))
          }
        >
          Assessment Project
        </a>
      </div>

      <nav className="nav">
        {login_state}

        <ul className="menu">
          <li style={{ marginTop: 20 }}>
            <input id="check_input" className="menu_cbox" type="checkbox" />
            <label htmlFor="check_input" style={{ marginRight: 10 }}>
              MENU
            </label>
            {login_state_hidden}
          </li>
        </ul>
      </nav>
    </header>
  );
}
