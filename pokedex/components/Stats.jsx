import React from 'react'
import Stat from './Stat'
const Stats = ({pokemon}) => {
  let total = 0
  const maxStat = () => {
    let max = 0
    for(let stat of pokemon.stats){
      if(stat.base_stat >= max){
        max = stat.base_stat
      }
      total += stat.base_stat
    }
    return max
  }
  let max = maxStat()
  
  return (
    <div className='grid grid-cols-3 w-full px-5'>
      <Stat stat={pokemon.stats[0]} name={"Hp"} width={pokemon.stats[0].base_stat/max * 100}/>
      <Stat stat={pokemon.stats[1]} name={"Attack"}  width={pokemon.stats[1].base_stat/max * 100}/>
      <Stat stat={pokemon.stats[2]} name={"Defense"}  width={pokemon.stats[2].base_stat/max * 100}/>
      <Stat stat={pokemon.stats[3]} name={"Sp. Attack"}  width={pokemon.stats[3].base_stat/max * 100}/>
      <Stat stat={pokemon.stats[4]} name={"Sp. Defense"}  width={pokemon.stats[4].base_stat/max * 100}/>
      <Stat stat={pokemon.stats[5]} name={"Speed"}  width={pokemon.stats[5].base_stat/max * 100}/>
      <span className='justify-self-end px-5 whitespace-nowrap'>Total</span>
      <span>{total}</span>
    </div>
  )
}

export default Stats