import Card from "./Card";
import { pokemonData } from "../pokedex";

const Electric = () => {
    return (
        <Card type={pokemonData.electric}/>
    )
}

export default Electric;