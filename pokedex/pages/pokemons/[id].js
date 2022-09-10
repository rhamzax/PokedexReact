import { useRouter } from "next/router";

export default function Pokemon({ pokemon }) {
    
    const router = useRouter()
    const { id } = router.query

    return (
    <>
        <h1>Hello {id}</h1>
        <h1>{pokemon.weight}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={`${pokemon.species.name} image`} />
    </>

    )
}

export async function getStaticProps({params}){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const json = await response.json();

    return {
        props: {pokemon: json}
    }
}

export async function getStaticPaths(){
    const response = await fetch('http://localhost:3001/pokemons.json')
    const json = await response.json();

    const paths = json.map(pokemon => {
        return { params: {id: pokemon} }
    })
    return {
        paths,
        fallback: false
    } 
    
}