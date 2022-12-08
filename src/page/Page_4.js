import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const Page_4 = () => {
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
    <div className="body">
      <Link  to="/"><button>Home</button></Link>
      <Link  to="/populaire"><button>Les mieux notées</button></Link>
      <p style={{padding:"10px"}}>Nom : {title[id]?.title}</p>   
      <p style={{padding:"10px"}}>synopsis : {title[id]?.overview}</p>
      <p style={{padding:"10px"}}>synopsis : {title[id]?.release_date}</p>
      
    </div>
  );
};

export default Page_4;