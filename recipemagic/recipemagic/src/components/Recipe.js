import React, { useEffect, useState } from "react";

import "../css/recipes.css";

export default function Recipe() {

  const [load, setLoad] = useState(true)
useEffect(() => {
  fetchrecipe();
}, []);


  const oninputchange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const searchrecipes = () => {
    fetchrecipe();
  };

  //fetch recipe from api
  const fetchrecipe = async () => {
    const url = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=a124e242&app_key=yourapikey&from=0&to=100&calories=591-722&health=alcohol-free`
    );
    const recipedata = await url.json();

    // console.log(recipedata.hits);

    setRecipedata(recipedata.hits);
    setLoad(false)
  };

  

  const [search, setSearch] = useState("chicken");

  const [recipedata, setRecipedata] = useState([]);

  return (
    <>
      <div className=" recipesearch text-center container-fluid p-4">
        <h1>Recipe page</h1>

        <input
          type="text"
          className="form-control w-50 searchrecipes"
          placeholder="search recipes"
          name="search"
          value={search}
          onChange={oninputchange}
        ></input>
        <br></br>
        <button type="button" className="btn btn-info" onClick={searchrecipes}>
          search
        </button>
      </div>

      <div className=" recipelist p-4">
        {load?
        <div className="d-flex justify-content-center bg-white p-3">
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div> <h3 className="ml-3">loading</h3>
      </div>
        :
        <div className="container-fluid">
        <br></br>
        <h3>your search:{search}</h3>

        <div className="row">
          {recipedata.map((l) => {
            return (
              <div className="col-md-4" key={l.recipe.id}>
                <div className="card recipes m-3">
                  <br></br>
                  <img
                    className="card-image-top image-fluid recipe-img"
                    src={l.recipe.image}
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">{l.recipe.label}</h4>
                    <h5>Ingredients</h5>
                    <ol>
                      {l.recipe.ingredientLines.map((i) => {
                        return <li>{i}</li>;
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


        }
      </div>

    </>
  );
}
