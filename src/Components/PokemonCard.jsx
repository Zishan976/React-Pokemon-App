export const PokemonCard = ({ data }) => {
    return (
        <li className="pokemon-card">
            <figure>
                <img src={data.sprites.other.dream_world.front_default} alt={data.name} />
            </figure>
            <h1>{data.name}</h1>
            <p>{data.types.map((typez) => typez.type.name).join(', ')}</p>
            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <p>Height: <span>{data.height}</span></p>
                </div>
                <div className="pokemon-info">
                    <p>Weight: <span>{data.weight}</span></p>
                </div>
                <div className="pokemon-info">
                    <p>Speed: <span>{data.stats[5].base_stat}</span></p>
                </div>
            </div>

            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <p>Experience: <span>{data.base_experience}</span></p>
                </div>
                <div className="pokemon-info">
                    <p>Atteck: <span>{data.stats[1].base_stat}</span></p>
                </div>
                <div className="pokemon-info">
                    <p>Abilities: <span>{data.abilities[0].ability.name}</span></p>
                </div>
            </div>
        </li>
    )
}