/*
    This file contains all the functions needed to fetch data from the official
    Poke API "https://pokeapi.co/". They just abstract it all.
*/

const POKE_API_URL = "https://pokeapi.co/api/v2"

const pokeFetch = async function(url) {
    // Fetching
    const response = await fetch(url)

    // Error Handling
    if(response.statusText === 'Not Found') 
        return new Error('Not Found')

    // Processing Info
    const data = await response.json()

    // Return
    return data
}

const getPokeDescription = async function(pokeID) {
    // Fetch pokeFlavors
    const pokeFlavors = await pokeFetch(`${POKE_API_URL}/pokemon-species/${pokeID}`)

    // Error Handling
    if(pokeFlavors instanceof Error) return pokeFlavors

    // Processing Info
    const pokeDescription = pokeFlavors.flavor_text_entries.filter(flavor => {
        const { language, version } = flavor;
        
        const isInEnglish = language.name === 'en'
        const isInRedVersion = version.name === 'red'

        return isInEnglish && isInRedVersion
    })[0].flavor_text


    return pokeDescription
}

const getPokeData = async function(pokeName) {
    // Fetch pokeData
    const pokeData = await pokeFetch(`${POKE_API_URL}/pokemon/${pokeName}`)

    // Error Handling
    if(pokeData instanceof Error) return pokeData

    console.log(pokeData)

    // Processing Info
    const pokemon = {
        name: pokeData.name,
        id: pokeData.id,
        description: await getPokeDescription(pokeData.id),
        sprite: pokeData.front_default,
        types: pokeData.types.map(typeObject => typeObject.type.name)
    }

    return pokemon
}

export { getPokeData }