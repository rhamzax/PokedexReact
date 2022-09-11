import React from "react";

const Characteristics = ({ pokemon }) => {
  return (
    <>
      <table className="table-auto text-left capitalize text-l">
        <tbody>
          <tr>
            <th className="text-right px-10 align-top font-semibold py-2">
              Type
            </th>
            <td className="flex flex-wrap gap-3 py-2">
              {pokemon.types.map((type, index) => (
                <span className="bg-red-400 px-5 rounded-sm text-white" key={index}>
                  {type.type.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th className="text-right px-10 font-semibold py-2">Height</th>
            <td className="lowercase">{pokemon.height / 10}m</td>
          </tr>
          <tr>
            <th className="text-right px-10 font-semibold py-2">Weight</th>
            <td>{pokemon.weight / 10}kg</td>
          </tr>
          <tr>
            <th className="text-right px-10 align-top font-semibold py-2">
              Abilities
            </th>
            <td className="flex flex-wrap gap-3 py-2">
              {pokemon.abilities.map((ability, index) => (
                <span className="bg-red-400 px-3 rounded-sm text-white" key={index}>{ability.ability.name}</span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Characteristics;
