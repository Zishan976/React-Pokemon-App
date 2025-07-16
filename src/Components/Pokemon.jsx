import { use, useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard"
import Pagination from "./Pagination";

export const Pokemon = ({ search }) => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;


    const Api = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"

    const fetchPokemon = async () => {
        try {
            const res = await fetch(Api);
            const data = await res.json()

            const detailedPokemonData = await data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data
            })
            const detailedRaspons = await Promise.all(detailedPokemonData)

            setApiData(detailedRaspons)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    const searchedData = apiData.filter((pokemonName) =>
        pokemonName.name.toLowerCase().includes(search.toLowerCase())
    )



    // Pagination calculations
    const totalPages = Math.ceil(searchedData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchedData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    // Reset to first page when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);



    useEffect(() => {
        fetchPokemon()
    }, [])

    if (loading) { return <h1 style={{ textAlign: "center" }}>Loading...</h1> }

    if (error) { return <h1 style={{ textAlign: "center" }}>Error: {error.message}</h1> }
    return (
        <section>
            <ul className="card-demo">
                {currentItems.map((pokemondata) => {
                    return <PokemonCard key={pokemondata.id} data={pokemondata} />
                })}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

        </section>)
}
