function createPokeCard(pokemon: Pokemon) {
    const pokeCard = document.createElement('div')
    pokeCard.style.display = 'flex'
    pokeCard.style.flexDirection = 'row'

    const sprite = document.createElement('img')
    sprite.setAttribute('src', pokemon.sprite)
    sprite.setAttribute('alt', pokemon.name)
    sprite.style.height = '50vh'

    const box = document.createElement('div')
    box.style.display = 'flex'
    box.style.flexDirection = 'column'

    // Header
    const header = document.createElement('header')
    header.style.display = 'flex'
    header.style.flexDirection = 'row'

    const name = document.createElement('p')
    name.innerText = pokemon.name
    name.style.fontSize = '2.6rem'
    name.style.fontWeight = 'bold'
    name.style.textTransform = 'capitalize'
    name.style.marginBottom = '3vh'

    const id = document.createElement('p')
    id.innerText = String(pokemon.id)

    header.appendChild(name)
    header.appendChild(id)

    // Main
    const main = document.createElement('main')
    main.style.display = 'flex'
    main.style.flexDirection = 'column'

    const description = document.createElement('p')

    description.innerText = formatDescription(pokemon.description)
    description.style.fontSize = '1rem'    

    main.appendChild(description)

    // Footer
    const footer = document.createElement('footer')
    footer.style.display = 'flex'
    footer.style.flexDirection = 'row'

    const types = pokemon.types

    types.forEach((type) => {
        const p = document.createElement('p')
        p.innerText = type

        footer.appendChild(p)
    })

    box.appendChild(header)
    box.appendChild(main)
    box.appendChild(footer)

    pokeCard.appendChild(sprite)
    pokeCard.appendChild(box)

    pokeCard.style.transition = 'opacity 2s ease-in-out'
    pokeCard.style.position = 'absolute'
    pokeCard.style.opacity = '0'

    return pokeCard
}

function formatDescription(description: string) {
    const formattedDescription = []

    for(let i = 0; i < description.length - 1; i++) {
        if(description[i] + description[i+1] == '\n')
        formattedDescription.push(description[i])
    }

    return formattedDescription.join()
}

export default createPokeCard