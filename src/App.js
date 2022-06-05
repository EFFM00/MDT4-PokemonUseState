import { useState } from 'react';
import './App.css';
import Navegation from './Navegation';
import { pokemonData } from './pokedex';
import Card from './components/Card';

function App() {
  const [type, setType] = useState("Pokemones")

  const handlerType = (params) => {
    switch (params) {
      case "fire":
        setType(<Card type={pokemonData.fire} classType="fire"/>);
        break;
      case "electric":
        setType(<Card type={pokemonData.electric} classType="electric"/>);
        break;
      case "water":
        setType(<Card type={pokemonData.water} classType="water"/>);
        break;
      case "rock":
        setType(<Card type={pokemonData.rock} classType="rock"/>);
        break;
        case "home":
          setType();
          break;

    }
  }

  return (
    <div className="App">
      <Navegation typeFn={handlerType}/>
      <main>
        {type}
      </main>
    </div>
  );
}

export default App;
