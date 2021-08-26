import AnimatedElement from "./animatedElement"

function createPokeCard(pokemon: Pokemon) {
    const pokeCard = new AnimatedElement()
    pokeCard.element.style.display = 'flex'
    pokeCard.element.style.flexDirection = 'row'

    const sprite = document.createElement('img')
    sprite.setAttribute('src', pokemon.sprite)
    sprite.setAttribute('alt', pokemon.name)
    sprite.style.height = '50vh'

    const box = document.createElement('div')
    box.style.display = 'flex'
    box.style.flexDirection = 'column'

    const name = document.createElement('p')
    name.innerText = pokemon.name
    name.style.fontSize = '2.6rem'
    name.style.fontWeight = 'bold'
    name.style.textTransform = 'capitalize'
    name.style.marginBottom = '3vh'

    const description = document.createElement('p')
    description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit gravida viverra interdum."
    description.style.fontSize = '1rem'

    box.appendChild(name)
    box.appendChild(description)

    pokeCard.element.appendChild(sprite)
    pokeCard.element.appendChild(box)

    return pokeCard
}

export default createPokeCard