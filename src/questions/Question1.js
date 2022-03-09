import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';



  export default function Question1()
    { 
        const [countryInfo, setCountryInfo] = useState([])
       

      useEffect(() => {

        setCountryInfo(<div style={{textAlign:"center"}}><progress max="100"></progress></div>)

    
        fetch('https://restcountries.com/v3.1/name/malta')
        .then(response => response.text())
  .then(data => setCountryInfo(data));
        
            
      }, [])



       

        return countryInfo
      
 
        
      }


