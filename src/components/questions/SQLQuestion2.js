/*
 * File name: SQLQuestion2.js
 * Purpose: For the the SQLQuestion2 page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React, { useState, useEffect } from "react";

export default function SQLQuestion2() {
  return (
    <>
      <div style={{ wordBreak: "break-word", marginTop: 10 }}>
        SELECT player_id, CONCAT(first_name, ' ', last_name) AS full_name FROM
        players INNER JOIN games
        <br />
        ON players.favourite_game = games.game_id WHERE games.game_name =
        'SLOT';
      </div>
    </>
  );
}
