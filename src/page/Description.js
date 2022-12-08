import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
const Description = () => {
  let { id } = useParams();
  const [title, setTitle] = useState('null');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=85f25a9951a9b561a28bb8b4903b3260`);
    console.log("res", res);
    console.log("res", res.data.reusults);
    setTitle(res.data.results);
  };

// affiches les donnée du film
  return (
    <div className="App-header">
    
      <Link  to="/" ><button className="bouton2">Home</button></Link>
      <Link  to="/note" ><button className="bouton2">Les plus populaires</button></Link>
      <h3 className="info2">Nom : {title[id]?.title}</h3> 
      <h3 className="info2">Date de sorti : {title[id]?.release_date}</h3>
      <a><img className="image4" src={` https://image.tmdb.org/t/p/original/${title[id].backdrop_path}`}></img></a>  
      <p className="info">synopsis :
      <br></br> 
      {title[id]?.overview}</p>
      
      
    </div>
    
  );
};

export default Description;