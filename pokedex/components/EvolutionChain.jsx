import { useState, useEffect } from "react"

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

  }, [])
<<<<<<< Updated upstream
  const getIndexFromURL = (url) => {
    url = url.slice(42)
    url = url.substring(0, url.length - 1)
    return url
  }

  const getEvolutionSpecies = () => {
    if (evolution) {

      let evoChain = [];
      let evoData = evolution.chain;

      do {
        let numberOfEvolutions = evoData.evolves_to.length;
        let evoDetails = evoData.evolution_details[0]
        let id = getIndexFromURL(evoData.species.url)
        
        evoChain.push({
          "species_name": evoData.species.name,
          "min_level": !evoDetails ? 1 : evoDetails.min_level,
          "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
          "item": !evoDetails ? null : evoDetails.item,
          "id": !id ? null: id
        });

        if (numberOfEvolutions > 1) {
          for (let i = 1; i < numberOfEvolutions; i++) {
            evoDetails = evoData.evolves_to[i].evolution_details[0]
            id = getIndexFromURL(evoData.evolves_to[i].species.url)
            evoChain.push({
              "species_name": evoData.evolves_to[i].species.name,
              "min_level": !evoDetails ? 1 : evoDetails.min_level,
              "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
              "item": !evoDetails ? null : evoDetails.item,
              "id": !id ? null: id
            });
          }
        }

        evoData = evoData.evolves_to[0];

      } while (evoData != undefined && evoData.hasOwnProperty('evolves_to'));
      return evoChain;
    }
  }
  
  if (evolution) {
    let evolutionList = getEvolutionSpecies()
    console.log(evolutionList)
    return (
      evolutionList.map(evolution => <Evolution name={evolution.species_name} min_level = {evolution.min_level} trigger_name={evolution.trigger_name} item={evolution.item} id={evolution.id}/>)
=======
  if (evolution) {
    let evolutionList = getEvolutionSpecies(evolution)

    let items = evolutionList.map(evolution => {
      if (evolution.length) {
        return (
          <div className="grid grid-flow-col">
            {evolution.map(item => <Evolution key={item.id} name={item.species_name} min_level={item.min_level} trigger_name={item.trigger_name} item={item.item} id={item.id} />)}
          </div>
        )
      }
      return <Evolution key={evolution.id} name={evolution.species_name} min_level={evolution.min_level} trigger_name={evolution.trigger_name} item={evolution.item} id={evolution.id} />
    })


    return (
      <>{items}</>
>>>>>>> Stashed changes
    )
  }
  else {
    return (<></>)
  }
}

export default EvolutionChain