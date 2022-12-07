import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import { useParams, Link} from "react-router-dom"
import "../App.css";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  let { id } = useParams();
  const [mouvieList, setMouvieList] = useState([]);
  const [mouvieListFiltered, setMouvieListFiltered] = useState([]);
  const [list, setList]= useState([])

  async function getData() {
    const res = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=85f25a9951a9b561a28bb8b4903b3260");
    console.log("res", res.data);
    setMouvieList(res.data.results);
    setMouvieListFiltered(res.data.results);
  }

  useEffect(() => {
    getData();
  }, []);

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
  return (
    <div className="App-header">
    
        <p className="titre">Streamspace</p>
      < input onChange={handleChange} type="bouton" className="bouton" /><button className="bouton">Ajouter à ma liste</button>
      <br></br>
      <p className="text">Cartégorie : </p>
      <br></br>
      <a href={`http://localhost:3000/populaire/`}><button className="bouton">Les plus polaires</button></a>
      
      <a href={`http://localhost:3000/note/`}><button className="bouton">Les mieux notées</button></a>
      <br></br>
      <p  className="text">Ma liste :</p>
      <p  className="text">Film : </p>
      {mouvieListFiltered.map((title, index) => {
        return (
          
          <p  key={title.title}>
            <Link  justify-content= "center" to={`/film/${index}`}> 
            <a><img className="image" src={` https://image.tmdb.org/t/p/original/${title.poster_path}`}></img></a>
            <br></br>
            <a href={`/film/${index}`} target="_bank" className="lien"> {title.title}</a>
            </Link>
            <br></br>
            </p>
            
          
          
        );
      })}

    </div>
    
  );
};

export default Home
// import axios from "axios";
// import { useEffect, useState } from "react";
// import React from 'react'
// import {Link} from "react-router-dom"

// const Home = () => {
//   const [pokeList, setPokeList] = useState([]);
//   const [pokeListFiltered, setPokeListFiltered] = useState([]);

//   async function getData() {
//     const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
//     console.log("res", res.data);
//     setPokeList(res.data.results);
//     setPokeListFiltered(res.data.results);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   function handleChange(e) {
//     if (!e.target.value) {
//       setPokeListFiltered(pokeList);
//       return;
//     }

//     setPokeListFiltered(
//       pokeList.filter((pokemon) => pokemon.name.includes(e.target.value))
//     );
//   }
//   return (
//     <div>
//       <input onChange={handleChange} type="text" />
//       {pokeListFiltered.map((pokemon, index) => {
//         return (
//           <p key={pokemon.name}>
//             <Link to={`/film/${index + 1}`}>{pokemon.name}</Link>
//           </p>
//         );
//       })}

//     </div>
//   )
// }

// export default Home
// const [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || []);
// const [val, setVal] = useState("");

// function handleChange(e) {
//   console.log("list", list)
//   setVal(e.target.value);
// }

// function handleSubmit(e) {
//   e.preventDefault()
//   console.log("ici", list)
//   const tmpVal = val
//   const tmpList =[...list, {text: tmpVal, id: uuidv4()}] 
//   setList(tmpList);
//   setVal("")
//   localStorage.setItem("list", JSON.stringify(tmpList))
// }

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <input value={val} onChange={handleChange} type="text" />
//       <button type="submit">Ajouter à la liste</button>
//     </form>
//       <List list={list} setList={setList}/>
//   </div>
// );
