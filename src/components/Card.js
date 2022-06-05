const Card = ({type, classType}) => {
    return (
        <div className={classType + " cardContainer"}>
            {
                type.map((pokemon) =>
                    <div className="card" key={pokemon.id}>
                        <h3>{pokemon.pokemonName}</h3>
                        <img src={pokemon.avatar}/>
                    </div>
                )
            }
        </div>
    );
}

export default Card;