import React from "react";

const Characteristics = ({ pokemon }) => {
  return (
    <>
        <table className="table-auto text-left capitalize text-l">
          <tr>
            <th className="text-right px-10 font-semibold ">ID</th>
            <td>#{pokemon.id}</td>
          </tr>
          <tr>
            <th className="text-right px-10">Height</th>
            <td className="lowercase">{pokemon.height/10}m</td>
          </tr>
          <tr>
          <th className="text-right px-10">Weight</th>
            <td>{pokemon.weight/10}kg</td>
          </tr>
          <tr>
            <th className="text-right px-10 align-top">Abilities</th>
            <td className="flex flex-wrap gap-x-3">
              {pokemon.abilities.map((ability) => (
                <span>{ability.ability.name}</span>
              ))}
            </td>
          </tr>
          <tr>
            <th className="text-right px-10 align-top">Type</th>
            <td className="flex flex-wrap gap-x-3">
              {pokemon.types.map((type) => (
                <span>{type.type.name}</span>
              ))}
            </td>
          </tr>
        </table>
    </>
  );
};

export default Characteristics;
