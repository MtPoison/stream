import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
const Film = () => {
  let { id } = useParams();
  const [title, setTitle] = useState('null');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=85f25a9951a9b561a28bb8b4903b3260`);
    console.log("res", res);
    console.log("res", res.data.reusults);
    setTitle(res.data.results);
  };


  return (
    <div className="App-header">
    
      <Link  to="/" ><button className="bouton2">Back</button></Link>
     
      <h2 className="info2">Nom : {title[id]?.title}</h2> 
      <h2 className="info2">Date de sortie : {title[id]?.release_date}</h2>
      <a><img className="image4" src={` https://image.tmdb.org/t/p/original/${title[id]?.backdrop_path}`}></img></a>  
      <p className="info">Synopsis : 
        <br></br>
        {title[id]?.overview}</p>
      
    </div>
    
  );
};

export default Film;
