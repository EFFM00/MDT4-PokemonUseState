import Card from "./Card";
import { pokemonData } from '../pokedex';

const Rock = () => {
    return (
        <Card type={pokemonData.rock}/>
    )
}

export default Rock;