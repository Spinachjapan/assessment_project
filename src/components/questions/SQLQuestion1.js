/*
 * File name: SQLQuestion1.js
 * Purpose: For the the SQLQuestion1 page rendering
 * Author: Kohei Kaburaki
 * Date: 10th March, 2022
 * Version: 1.0
 * Note: This file will continue to be fixed and updated by Kohei or authoratized developers.
 */

import React, {useState, useEffect} from 'react';

  export default function SQLQuestion1()
    { 
       
        return <>
        <label style={{fontSize: 25}}>ER Diagram:</label>
        <div style={{margin: "20px 0 20px 0"}}><img style={{width: "90%"}} src="ERD.png"/></div>
        <label style={{fontSize: 25}}>SQL Query:</label>
        <div  style={{wordBreak: "break-word", marginTop: 20}}>

        CREATE TABLE 'games' (
  'game_id' INT NOT NULL AUTO_INCREMENT,
  'game_name' VARCHAR(45) NOT NULL,
  'allowed_country1' VARCHAR(45) NULL,
  'allowed_country2' VARCHAR(45) NULL,
  'allowed_country3' VARCHAR(45) NULL,
  PRIMARY KEY ('game_id'),
  UNIQUE INDEX 'game_name_UNIQUE';

  </div>

<div  style={{wordBreak: "break-word", marginTop: 10}}>
  CREATE TABLE 'players' (
  'player_id' INT NOT NULL AUTO_INCREMENT,
  'first_name' VARCHAR(45) NOT NULL,
  'last_name' VARCHAR(45) NOT NULL,
  'favourite_game' INT NULL,
  'country' VARCHAR(45) NOT NULL,
  PRIMARY KEY ('player_id'),
  CONSTRAINT 'favourite_game_key'
    FOREIGN KEY ('favourite_game')
    REFERENCES 'games' ('game_id');



        </div>
        </>
      
 
        
      }


