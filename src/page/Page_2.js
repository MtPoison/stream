import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const Page_2 = () => {
    
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
        
      <div className="body">
      <Link style={{padding:"10px"}} to="/">Back</Link>    
       {mouvieListFiltered.map((title, index) => {
        if(title.vote_average>=title.vote_average){
          return (
            
            <p style={{padding:"10px"}} key={title.vote_average}>
              
              
              <Link  justify-content= "center" to={`/sysnopis/${index}`}> 
            <a><img className="image" src={` https://image.tmdb.org/t/p/original/${title.poster_path}`}></img></a>
            <br></br>
            <a href={`/sysnopis/${index}`} target="_bank" className="lien"> {title.title}</a>
            </Link>
              </p>

          )};
        })};
  
      </div>
    );
};
export default Page_2