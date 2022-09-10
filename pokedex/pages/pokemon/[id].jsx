import { useRouter } from "next/router";

export default function Pokedex({ pokemon }) {
  const router = useRouter();
  const { id } = router.query;

  const pokeIndex = ("000" + (pokemon.id)).slice(-3);
  
  return (
    <>
    <div>
      <h1>{pokemon.name}</h1>
    </div>
    <div className="grid grid-cols-2">
      <p>ID</p>
      <p>#{pokemon.id}</p>
      <p>Height</p>
      <p>{pokemon.height}</p>
      <p>Abilities</p>
      <p>{pokemon.abilities.map((ability) => (<p>{ability.ability.name}</p>))}</p>
      <p>Type</p>
      <p>{pokemon.types.map((type) => (<p>{type.type.name}</p>))}</p>
    </div>
    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}/>

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

// `
// <span class="close" id="left">&times;</span>
// <h3 class="pokeName">${this.pokeName} #${this.index}</h3>
// <div class="pokeImg">
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png" alt="Pokemon" class="pokeImg">
// </div>
// <div class="pokeCharacteristic">
//     <p class="CharacteristicTitle">Type</p>
//     <div class="pokeTypes">
//         ${this.createModalStatsContent(this.types)}
//     </div>
//     <p class="CharacteristicTitle">Height</p>
//     <p>${this.height}m</p>
//     <p class="CharacteristicTitle">Weight</p>
//     <p>${this.weight}kg</p>
//     <p class="CharacteristicTitle">Abilities</p>
//     <div class="pokeAbilities">
//         ${this.createModalStatsContent(this.abilities)}
//     </div>
// </div>
// <p class="StatisticTitle">Stats</p>
// <div class="stats">
//     <p class="stat-title">Hp</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.hpWidth}%;">${this.hp}</span>
//     </div>    
//     <p class="stat-title">Attack</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.attackWidth}%;">${this.attack}</span>
//     </div>    
//     <p class="stat-title">Defense</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.defenseWidth}%;">${this.defense}</span>
//     </div>    
//     <p class="stat-title">Sp. Attack</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.spAttackWidth}%;">${this.spAttack}</span>
//     </div>    
//     <p class="stat-title">Sp. Defense</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.spDefenseWidth}%;">${this.spDefense}</span>
//     </div>    
//     <p class="stat-title">Speed</p>
//     <div class="animated-progress progress-blue">
//         <span data-progress="45" style="width: ${this.speedWidth}%;">${this.speed}</span>
//     </div>    
//     <p class="stat-title">Total</p>
//     <p>${this.total}</p>         
// </div>
// `