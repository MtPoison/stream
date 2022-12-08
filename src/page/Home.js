import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import { useParams, Link} from "react-router-dom"
import "../App.css";


const Home = () => {
  // creation des constance 
  let { id } = useParams();
  const [mouvieList, setMouvieList] = useState([]);
  const [mouvieListFiltered, setMouvieListFiltered] = useState([]);
  const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || [])
 
// definition de l api
  async function getData() {
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=85f25a9951a9b561a28bb8b4903b3260");
    console.log("res", res.data);
    setMouvieList(res.data.results);
    setMouvieListFiltered(res.data.results);
  }
// ca charge l api 
  useEffect(() => {
    getData();
  }, []);
// search bar
  function handleChange(e) {
    if (!e.target.value) {
      setMouvieListFiltered(mouvieList);
      console.log()
      return;
    }

    setMouvieListFiltered(
      mouvieList.filter((film) => film.title.includes(e.target.value))
    );

    
  }
// definir une liste par l index
  function handleSubmit(e, index) {
      e.preventDefault()
      setList(mouvieList)
      localStorage.setItem("list", JSON.stringify(mouvieList[index]))
    }
  return (
    <div className="App-header">
    {/* ca afiche les donner */}
        <h1 className="titre">Streamspace</h1>
      < input onChange={handleChange} type="bouton" className="bouton" id="sharbar" />
      <br></br>
      <h3 className="text">Cartégorie : </h3>
      <br></br>
      <a href={`http://localhost:3000/populaire/`}><button className="bouton">Les plus polaires</button></a>
      
      <a href={`http://localhost:3000/note/`}><button className="bouton">Les mieux notées</button></a>
      <br></br>
      <div className="margin">
      <h3  className="text">Ma liste :
      <br></br>
      <br></br>
      <img className="image3" src={` https://image.tmdb.org/t/p/original/${list?.poster_path}`}></img>
      <p>{list.title}</p>
      </h3>
      </div>
      <h3  className="text">Film : </h3>
      <div className="ligne">
         
      {mouvieListFiltered.map((title, index) => {
        return (
          // ca affice les infos de l api + redirige vers les autres pages 
          <p  key={title.title}>
            <Link  justify-content= "center" to={`/film/${index}`}> 
            <a><img className="image2" src={` https://image.tmdb.org/t/p/original/${title?.poster_path}`}></img>
            </a>
            <br></br>
            <a href={`/film/${index}`} target="_bank" className="lien"> {title?.title}</a>
            </Link>
            <br></br>
           <form onSubmit={(e) => {handleSubmit(e, index)}}>
                <a href={`/film/${index}`}><button style={{cursor:"pointer"}} type="submit">Ajouter à la liste</button></a>
              </form>
            </p>
            
          
          
        );
      })}

    </div>
    </div>
    
    
  );
};

export default Home
