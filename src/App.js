import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import FoodAnalysis from './FoodAnalysis'
import FoodSearch from './FoodSearch'


function App() {
  const [showPage, setPage] = useState('')
 
 
  const resetButton = () => {
    console.log('rest');
    
  }

  const setEvalurValue = (value) => {
    setPage(value);
  }


  return (
    <div className="App">
      <div style={{ padding: "30px" }}>
        <button onClick={() => setEvalurValue('search')}>Food Search</button>
        <button onClick={() => setEvalurValue('analysis')}>Food Analysis</button>
        
      </div>

      {showPage === 'search' ?
        <>
         <FoodSearch setEvalurValue={setEvalurValue}></FoodSearch>
        </>
        :
       null
        }
      {showPage==='analysis'?
      <FoodAnalysis setEvalurValue={setEvalurValue}></FoodAnalysis>
      :null
    }

    </div>
  );
}

export default App;
