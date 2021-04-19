
import React, { useEffect, useState } from 'react'

import axios from 'axios';


export default function FoodAnalysis(props) {
    const [formData, setFormData] = useState({
        title: '',
        ingr: []
    })
    const APP_ID = "0f7d0851";
    const APP_KEY = "3a7b3449b721b3003d6873ef4e77907e"
    const [title, setTitle] = useState('')
    const [intgra, setIngra] = useState('')
    const [analysisData, setanalysisData] = useState();

    

    const [intgradient, setintgradient] = useState([]);

    const addIngradient = () => {
        setintgradient([...intgradient, intgra]);
        setIngra('')
    }

    const setTitleValue = (e) => {
        setTitle(e.target.value)
    }
    const setIngraValue = (e) => {
        setIngra(e.target.value)
    }
    console.log('intgradient', intgradient);

   
    const getAlaysis = async () => {
        axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`, {
            title: title,
            ingr: intgradient
          })
          .then((response) => {
            props.setEvalurValue('analysis')
           // setanalysisData(Response)
            console.log('ddccc',Response);
          }, (error) => {
            console.log(error);
          });    
      }
      console.log('ssssssss',analysisData);
    return (
        <div>
            <form>
                Title:<input type='text' value={title} onChange={setTitleValue}></input>
                <div>
                    Integradint:<input type='text' value={intgra} onChange={setIngraValue}></input>
                    <button type="button" onClick={addIngradient}>add Integradint</button>
                </div>
                {intgradient.map((intgradientData,intgradientkey)=>{
                    return(
                        <p>{intgradientData}</p>
                    )
                })}
                <button type="button" onClick={getAlaysis}>submit</button>
            </form>


        </div>
    )
}
