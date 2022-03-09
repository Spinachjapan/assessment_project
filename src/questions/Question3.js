import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';



  export default function Question3()
    { 
        const [countryNameInput, setCountryNameInput] = useState(null)
        const [allCountries, setAllCountries] = useState(null)
        const [result, setResult] = useState([])
        const [progress, setProgree] = useState(null)

        const inputStyle = {fontSize: 20, border: "2px solid blue" }
        

       
    

    useEffect(() => {

      setProgree(<div style={{textAlign:"center"}}><progress max="100"></progress></div>)

        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
      .then(data =>
        {   
            
        
            let temp_array = []
        data.map((value) => (
          temp_array.push(value["name"]["common"])      
          ))
          setProgree(null)
          setAllCountries(temp_array)
          setResult(temp_array)
        }).catch(error =>
        {
          alert(error)
           
        }
        )

        
            
    }, [])



    const filter_countries = () =>
    {
      setProgree(<div style={{textAlign:"center"}}><progress max="100"></progress></div>)

            let temp_array = []

            allCountries.map((value) => 
                {
                  
                    if (value.indexOf(countryNameInput) != -1) {
                        
                        temp_array.push(value)
                        
                        }
    
                        
    
                }
            )
    
            setProgree(null)
            setResult(temp_array)





        }



        

       





    



      






       

        return <table align="center" style={{marginTop: 100, fontSize: 20}}>
          <tbody>
          <input style={inputStyle} type="text" onChange={(e) => setCountryNameInput(e.target.value)}/><input style={{fontSize:"20px"}} type="button" value="FILTER" onClick={() => filter_countries()}/><input style={{fontSize:"20px"}} type="button" value="RESET" onClick={()=>setResult(allCountries)}/>
        {progress}
        {result.map((value, index) => (
   <li key={index}>
   {value}
</li>
 ))}
 </tbody>
</table>
      
 
        
      }


