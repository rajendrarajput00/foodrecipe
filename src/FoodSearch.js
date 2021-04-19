
import React, { useEffect, useState } from 'react'
import RecipDesign from './RecipDesign'
import axios from 'axios';



export default function FoodSearch(props) {
    const [recipeData, setRecipeData] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [searchQuery, setQuery] = useState('chicken')
    const APP_ID = "676a4a3f";
    const APP_KEY = "b317a9e1d4bc74fa0d50a86d863f4bb6"

    useEffect(() => {
        getRecipes();
      }, [searchQuery])


  const getRecipes = async () => {
    await axios(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(Response => {
        setRecipeData(Response.data.hits);
        props.setEvalurValue('search')
      })
      .catch(e => {
        console.log(e.message);
      })
  }

  const updateSearch = (e) => {
    setSearchItem(e.target.value);
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchItem);
    setSearchItem('')
  }
    return (
        <div>
             <form onSubmit={getSearch}>
            <input type="text" value={searchItem} onChange={(e) => updateSearch(e)}></input>
            <button type='submit'>Search</button>
          </form>
          <RecipDesign data={recipeData} />
        </div>
    )
}
