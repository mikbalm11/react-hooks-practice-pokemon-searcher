import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

/*

Hierarchy:

App
  -PokemonPage
    -PokemonForm
    -Search
    -PokemonCollection
      -PokemonCard

*/

const URL = "http://localhost:3001/pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  const filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <PokemonPage pokemon={filteredPokemon} search={searchTerm} onChangeSearch={setSearchTerm} onAddPokemon={handleAddPokemon} />
    </div>
  );
}

export default App;
