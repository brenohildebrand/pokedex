import getPokeData from './pokeAPI'
import createSearchBar from './searchBar'
import createMessage from './message'
import createPokeCard from './pokeCard'
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!

// const welcomeMessage = createMessage("Welcome to the Pokémon World!")
// welcomeMessage.element.style.opacity = '0'

// const exploreMessage = createMessage("Explore it!")
// exploreMessage.element.style.opacity = '0'

// app.appendChild(welcomeMessage.element)
// app.appendChild(exploreMessage.element)

// welcomeMessage.fadeIn()
// welcomeMessage.fadeOut()

async function fn() {

  const pokemon = await getPokeData('pikachu')
  const pokeCard = createPokeCard(pokemon)
  
  app.append(pokeCard)

}

fn()