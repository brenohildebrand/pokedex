/*
    This file contains all the functions needed to fetch data from the official
    Poke API "https://pokeapi.co/". They just abstract it all.
*/

const POKE_API_URL = "https://pokeapi.co/api/v2"

type PokeEndpoint = 'pokemon' | 'pokemon-species'

type Pokemon = {
    name: string
    id: number
    description: string
    sprite: string
    types: string[]
}

type PokeData = {
    name: string,
    id: 44,
    sprites: Sprites,
    types: Type[]
}

type Sprites = {
    front_default: string,
    back_defaut: string,
}

type Type = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

type PokeSpecies = {
    flavor_text_entries: FlavorTextEntry[]
}

type FlavorTextEntry = {
    flavor_text: string,
    language: {
        name: string,
        url: string
    },
    version: {
        name: string,
        url: string
    }
}

// This is called function overload in TS
async function pokeFetch(pokeEndpoint: 'pokemon', value: string): Promise<PokeData | Error>
async function pokeFetch(pokeEndpoint: 'pokemon-species', value: string): Promise<PokeSpecies | Error>
async function pokeFetch(pokeEndpoint: PokeEndpoint, value: string): Promise<PokeData | PokeSpecies | Error> {
    // Fetching
    const response = await fetch(`${POKE_API_URL}/${pokeEndpoint}/${value}`)

    // Error Handling
    if(response.statusText === 'Not Found') 
        return new Error('Not Found')

    // Processing Info
    const data = await response.json()

    // Return
    return data
}

async function getPokeDescription(pokeID: number): Promise<string | Error> {
    // Fetch pokeFlavors
    const pokeFlavors = await pokeFetch('pokemon-species', pokeID.toString())

    // Error Handling
    if(pokeFlavors instanceof Error) return pokeFlavors

    // Processing Info
    const pokeDescription = pokeFlavors.flavor_text_entries.filter(flavor => {
        const { language, version } = flavor;
        
        const isInEnglish = language.name === 'en'
        const isInRedVersion = version.name === 'red'

        return isInEnglish && isInRedVersion
    })[0].flavor_text

    // Return
    return pokeDescription
}

async function getPokeData(pokeName: string): Promise<Pokemon | Error> {
    // Fetch pokeData and pokeDescription
    const pokeData = await pokeFetch('pokemon', pokeName)

    // Error Handling
    if(pokeData instanceof Error) return pokeData as Error

    // Fetch pokeDescription
    const pokeDescription = await getPokeDescription(pokeData.id)

    // Error Handling
    if(pokeDescription instanceof Error) return pokeDescription as Error

    // Processing Info
    const pokemon = {
        name: pokeData.name,
        id: pokeData.id,
        description: pokeDescription,
        sprite: pokeData.sprites.front_default,
        types: pokeData.types.map(typeObject => typeObject.type.name)
    }

    // Return
    return pokemon
}

export { getPokeData }