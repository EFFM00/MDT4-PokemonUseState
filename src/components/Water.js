import Card from "./Card";
import { pokemonData } from '../pokedex';

const Water = () => {
    return (
        <Card type={pokemonData.water} />
    )
}

export default Water;