import Layout from "../components/Layout";
import Pokemon from "../components/Pokemon";

export default function Home({ initialPokemon }) {
  // const [pokemon, setPokemon] = useState(initialPokemon)
  // console.log(pokemon)

  return (
    <Layout title={"PokeDev"}>
      <div className="grid grid-cols-3 justify-center items-center sm:grid-cols-5 lg:grid-cols-9">
        {initialPokemon.results.map((pokemon, index) => (
          <Pokemon pokemon={pokemon} index={index + 1} />
        ))}
      </div>
    </Layout>
  );
}


export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=898&offset=0");
  const initialPokemon = await response.json();

  return {
    props: {
      initialPokemon,
    },
  };
}
