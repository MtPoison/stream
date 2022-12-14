import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Populaire = () => {
    
    const [mouvieList, setMouvieList] = useState([]);
    const [mouvieListFiltered, setMouvieListFiltered] = useState([]);
    
  
    async function getData() {
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=85f25a9951a9b561a28bb8b4903b3260");
      console.log("res", res.data);
      setMouvieList(res.data.results);
      setMouvieListFiltered(res.data.results);
    }
  
    useEffect(() => {
      getData();
    }, []);

    return (
      <div className="App-header">
      
      <div className="body">
      <Link  to="/" ><button className="bouton2">Home</button></Link>
      <h3 className="populaire">Les films les plus populaires :</h3>   
      <div className="body2">
       {mouvieListFiltered.map((title, index) => {
        if(title.vote_average>=title.vote_average){
          return (
            
            <p style={{padding:"10px"}} key={title.vote_average}>
              
              
              <Link  justify-content= "center" to={`/info/${index}`}> 
            <a><img className="image" src={` https://image.tmdb.org/t/p/original/${title?.poster_path}`}></img></a>
            <br></br>
            <a href={`/info/${index}`} target="_bank" className="lien"> {title.title}</a>
            </Link>
              </p>

          )};
        })};
      </div>  
      </div>
      </div>
    );
};
export default Populaire