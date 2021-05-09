import React from 'react'
import "../css/recipes.css";
import {
    Link
  } from "react-router-dom";
export default function Home() {
    return (
        
           <div className="jumbotron">
                <div className="banner">
                <h1 className="text-white">Welcome to Recipe Magic</h1>
                <br></br>
                <Link to="/recipe" className="btn btn-success banner-btn">search your recipes</Link>
                </div>
           </div>
               
        
    )
}
