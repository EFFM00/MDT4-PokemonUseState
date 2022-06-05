import Card from "./Card";
import { pokemonData } from '../pokedex';

const Fire = () => {
    return (
        <Card type={pokemonData.fire} />
    )
}

export default Fire;