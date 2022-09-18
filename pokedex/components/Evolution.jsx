import React from 'react'
import Image from 'next/image'
const Evolution = ({name, min_level, trigger_name, item, id}) => {
  let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return (
    <div>{id}
    <Image
            className="object-contain"
            width={100}
            height={100}
            src={image}
            alt="evolutions"
      />
    </div>
  )
}

export default Evolution