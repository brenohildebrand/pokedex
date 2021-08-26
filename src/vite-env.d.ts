/// <reference types="vite/client" />

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
    id: number,
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

type AnimationCard = {
    name: string
    duration: number
    animate: Function
}