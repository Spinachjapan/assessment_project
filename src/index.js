import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Question1 from './questions/Question1';
import Question2 from './questions/Question2';
import Question3 from './questions/Question3';
import Question4 from './questions/Question4';
import SQLQuestion1 from './questions/SQLQuestion1';
import SQLQuestion2 from './questions/SQLQuestion2';
import Header from './Header';

export default function Home() {

  
  const button_style = {width: 200, height: 50, fontSize: 20, marginTop: 50 }

 
   return <div style={{textAlign: "center"}} >
      <button onClick={() =>  ReactDOM.render(<Question1 />, document.getElementById('root'))} style={button_style}>Question1</button><br/>
      <button onClick={() =>  ReactDOM.render(<Question2 />, document.getElementById('root'))}  style={button_style}>Question2</button><br/>
      <button onClick={() =>  ReactDOM.render(<Question3 />, document.getElementById('root'))}  style={button_style}>Question3</button><br/>
      <button onClick={() =>  ReactDOM.render(<Question4 />, document.getElementById('root'))}  style={button_style}>Question4</button><br/>
      <button onClick={() =>  ReactDOM.render(<SQLQuestion1 />, document.getElementById('root'))} style={button_style}>SQL Question1</button><br/>
      <button onClick={() =>  ReactDOM.render(<SQLQuestion2 />, document.getElementById('root'))} style={button_style}>SQL Question2</button><br/>

   </div>


   

  }


  ReactDOM.render(<Home />, document.getElementById('root'));
    
  

  




