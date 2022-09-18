const getIndexFromURL = (url) => {
  url = url.slice(42);
  url = url.substring(0, url.length - 1);
  return url;
};

export const getEvolutionSpecies = (evolution) => {
  let evoChain = [];
  let evoData = evolution.chain;

  while (evoData != undefined && evoData.hasOwnProperty("evolves_to")) {
    let numberOfEvolutions = evoData.evolves_to.length;
    let evoDetails = evoData.evolution_details[0];
    let id = getIndexFromURL(evoData.species.url);

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoDetails ? 1 : evoDetails.min_level,
      trigger_name: !evoDetails ? null : evoDetails.trigger.name,
      item: !evoDetails ? null : evoDetails.item,
      id: !id ? null : id,
    });

    if (numberOfEvolutions > 1) {
      let evoSet = []
      for (let i = 0; i < numberOfEvolutions; i++) {
        evoDetails = evoData.evolves_to[i].evolution_details[0];
        id = getIndexFromURL(evoData.evolves_to[i].species.url);
        evoSet.push({
          species_name: evoData.evolves_to[i].species.name,
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          trigger_name: !evoDetails ? null : evoDetails.trigger.name,
          item: !evoDetails ? null : evoDetails.item,
          id: !id ? null : id,
        });
      }
      evoChain.push(evoSet)
      evoData = evoData.evolves_to[0];
    }

    evoData = evoData.evolves_to[0];
  }
  return evoChain;
};
