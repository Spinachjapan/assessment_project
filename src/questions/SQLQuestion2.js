import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';



  export default function SQLQuestion2()
    { 
       
       

        return <>
        
<div  style={{wordBreak: "break-word", marginTop: 10}}>
    SELECT player_id, CONCAT(first_name, ' ', last_name) 
    AS full_name FROM players INNER JOIN games 
    ON players.favourite_game = games.game_name 
    WHERE games.game_name = 'SLOT';


        </div>
        </>
      
 
        
      }


