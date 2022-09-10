import { useRouter } from "next/router";

export default function Pokedex({ pokemon }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Hello {pokemon.id}</h1>
      <h1>{pokemon.weight}</h1>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt={`${pokemon.species.name} image`}
      />
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
