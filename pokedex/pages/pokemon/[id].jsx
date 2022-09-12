import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Characteristics from "../../components/Characteristics";
import Stats from "../../components/Stats";
import Image from "next/image";


export default function Pokedex({ pokemon }) {
  const router = useRouter();
  const { id } = router.query;

  const pokeIndex = ("000" + pokemon.id).slice(-3);

  return (
    <>
      <Layout title={"PokéDex"} isPokemon={true}>
        <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="uppercase text-2xl m-5">{pokemon.name} <span>#{pokemon.id}</span></h1>
            </div>
            <div className="grid lg:grid-cols-3 justify-items-center items-center">
              <Characteristics pokemon={pokemon} />
              <Image
                className="object-contain"
                width={400}
                height={400}
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
              />
              <Stats pokemon={pokemon}/> 
            </div>
           
        </div>

      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const json = await response.json();

  return {
    props: { pokemon: json },
  };
}
