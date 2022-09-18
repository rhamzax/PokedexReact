import { useState, useEffect } from "react"
import { getEvolutionSpecies } from "../util/getEvolution"
import Evolution from "./Evolution"
const EvolutionChain = ({ evolutionChainUrl }) => {
  const [evolution, setEvolution] = useState(null)

  useEffect(() => {
    const fetchEvolution = () => {
      fetch(evolutionChainUrl)
        .then((result) => result.json())
        .then((data) => setEvolution(data))
    }
    fetchEvolution()
  })
  if (evolution) {
    let evolutionList = getEvolutionSpecies(evolution)

    let items = evolutionList.map((evolution, index) => {
      if (evolution.length) {
        return (
          <div className="grid grid-flow-col" key={evolution}>
            {evolution.map(item => <Evolution key={item.id} name={item.species_name} min_level={item.min_level} trigger_name={item.trigger_name} item={item.item} id={item.id} index={index}/>)}
          </div>
        )
      }
      return (
        <div key={evolution.id}>
            <Evolution key={evolution.id} name={evolution.species_name} min_level={evolution.min_level} trigger_name={evolution.trigger_name} item={evolution.item} id={evolution.id} index={index}/>
        </div> 
      )   
    })


    return (
      <div className="grid justify-items-center">
        <span className="text-xl bg-red-400 text-white px-4 rounded-md">Evolutions</span>
        {items}
      </div>
    )
  }
  else {
    return (<></>)
  }
}

export default EvolutionChain