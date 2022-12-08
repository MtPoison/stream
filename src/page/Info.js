import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";
const Info = () => {
  let { id } = useParams();
  const [title, setTitle] = useState('null');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260`);
    console.log("res", res);
    console.log("res", res.data.reusults);
    setTitle(res.data.results);
  };


  return (
    <div className="App-header">
    <div className="body">
      <Link  to="/" id="bouton" ><button className="bouton2">Home</button></Link>
      <Link  to="/populaire" ><button className="bouton2">Les mieux notées</button></Link>
      
      <h3 className="info2">Nom : {title[id]?.title}</h3> 
      <h3 className="info2">synopsis : {title[id]?.release_date}</h3>
      <a><img className="image4" src={` https://image.tmdb.org/t/p/original/${title[id]?.backdrop_path}`}></img></a>   
      <p className="info">synopsis : 
      <br></br>
      {title[id]?.overview}</p>
     
      
    </div>
    </div>
  );
};

export default Info;