import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon, index }) => {
  const pokeIndex = ("000" + (index)).slice(-3);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <a>
        <div className="bg-gray-100 border rounded p-2 flex flex-col relative hover:bg-gray-200">
          <div className="flex flex-col justify-between items-start uppercase font-semibold text-zinc-800-00 text-sm tracking-wide">
            <h1>{pokeIndex}</h1>
            <h1>{pokemon.name}</h1>
          </div>
          <img className="w-max"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
          />
        </div>
      </a>
    </Link>
  );
};

export default Pokemon;
