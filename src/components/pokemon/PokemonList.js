import React from "react";
import axios from 'axios';
import PokemonCard from "./PokemonCard"
import Pagination from "./Pagination"

import spinner from "../../assets/5.gif";

export default function PokemonList() {
  const [url, setUrl] = React.useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = React.useState();
  const [prevPageUrl, setPrevPageUrl] = React.useState()
  const [pokemon, setPokemon] = React.useState(null);
  React.useEffect(() => {
    let cancel;
    axios
      .get(url, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      })
      .then(({ data }) => {
        setPokemon(data['results']);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      })
      .catch((error) => {
        console.log(error);
      });
      return () => cancel();
    }, [url])  
    
    const goToNextPage = () => {
      setUrl(nextPageUrl);
    }
    const goToPrevPage = () => {
      setUrl(prevPageUrl);
    }
    return (
   <>
      {pokemon ? ( 
      <div className="row">
        {pokemon.map((pok, i) => <PokemonCard {...pok} key={i}/>)}
        <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        />
      </div>
      ) : (
        <img
        src={spinner}
        style={{ width: "5em", height: "5em" }}
        className="card-img-top rounded mx-auto d-block mt-2"
        alt="loading logo"
      />
      )}
  </>
     
   
  );
}
