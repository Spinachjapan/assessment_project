import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';



  export default function SQLQuestion2()
    { 
       
       

        return <>
        
<div  style={{wordBreak: "break-word", marginTop: 10}}>
    SELECT player_id, CONCAT(first_name, ' ', last_name) AS full_name WHERE favourite_game = 'SLOT';


        </div>
        </>
      
 
        
      }


