import axios from "axios";

export const getPokemon = async (index) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
};