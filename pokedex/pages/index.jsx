import Layout from "../components/Layout";
import Pokemon from "../components/Pokemon";

const pokemonLimit = 898;

export default function Home({ pokemons }) {

  return (
    <Layout title={"PokéDex"} isPokemon={false}>
      <div className="grid grid-cols-3 justify-center items-center sm:grid-cols-5 lg:grid-cols-9">
        {pokemons.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} index={index + 1} key={index} />
        ))}
      </div>
    </Layout>
  );
}


export async function getStaticProps(context) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonLimit}`);
  const {results} = await response.json();
  const pokemons = results.map((pokemon, index) => {
    const pokeIndex = ("00" + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`
    return{
      ...pokemon,
      image
    }
  })
  return {
    props: {
      pokemons,
    },
  };
}
