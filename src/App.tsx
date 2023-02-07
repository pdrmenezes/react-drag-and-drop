import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

function App() {
  const [pokemonParty, setPokemonParty] = useState<string[]>(["Empty Slot", "Empty Slot", "Empty Slot", "Empty Slot"]);

  function handleOnDrag(e: React.DragEvent, pokemonName: string) {
    e.dataTransfer.setData("pokemonName", pokemonName);
  }

  function handleOnDrop(e: React.DragEvent) {
    const pokemonName = e.dataTransfer.getData("pokemonName") as string;
    if (pokemonParty.includes(pokemonName)) {
      alert(`${pokemonName} is already in your party`);
    } else {
      const pokemonPartyWithoutLastItem = pokemonParty.slice(0, -1);
      setPokemonParty([pokemonName, ...pokemonPartyWithoutLastItem]);
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  const availablePokemon = ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"];

  return (
    <div className="App">
      <header>
        <h1>Pokémon Drag & Drop Test</h1>
        <p>Drag and Drop the pokémon you want in your party.</p>
      </header>
      <main>
        <div className="available-pokemon">
          <h3>Pokémon Available</h3>
          <div className="pokemon-list">
            {availablePokemon.map((pokemon, index) => (
              <div className="pokemon-tag" draggable onDragStart={(e) => handleOnDrag(e, pokemon)} key={`${index}-${Date.now().toString()}`}>
                {pokemon}
              </div>
            ))}
          </div>
        </div>
        <div className="party-board">
          <h3>Your Party</h3>
          <div className="party-list" onDrop={handleOnDrop} onDragOver={handleDragOver}>
            {pokemonParty.map((pokemon, index) => (
              <Pokemon pokemon={pokemon} key={`${index}-${Date.now().toString()}`} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
