import createSearchBar from './searchBar'
import createHiddenMessage from './message'
import createPokeCard from './pokeCard'
import getPokeData from './pokeAPI'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const welcomeMessage = createHiddenMessage("Welcome to the Pokémon World!")
const exploreMessage = createHiddenMessage("Explore it!")
const searchBar = createSearchBar()

searchBar.addEventListener('submit', async (event) => {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const pokeName = form["searchBar"].value;

  // Loading Animation
  const animation = searchBar.querySelector('svg')?.animate(
    [
      // keyframes
      {
        transform: 'rotate(0deg)',
        '-webkit-transform': 'rotate(0deg)'
      },
      {   
        transform: 'rotate(360deg)',
        '-webkit-transform': 'rotate(-360deg)'
      },
    ], 
    {
      duration: 2000,
      iterations: Infinity
    }
  )

  const pokemon = await getPokeData(pokeName)

  if(pokemon instanceof Error) {
    console.log('Pokemon not found!')
    animation?.pause()
  } 
  else {
    const pokeCard = createPokeCard(pokemon)

    app.append(pokeCard)

    setTimeout(() => {

      animation?.pause()
      searchBar.style.opacity = '0'

      setTimeout(() => {

        pokeCard.style.opacity = '1'

      }, 3000)

    }, 0)
  }
})

setTimeout(() => {
  welcomeMessage.style.opacity = '1'

  setTimeout(() => {
    welcomeMessage.style.opacity = '0'

    setTimeout(() => {

      exploreMessage.style.opacity = '1'

      setTimeout(() => {

        exploreMessage.style.opacity = '0'

        setTimeout(() => {
          
          app.appendChild(searchBar)
          searchBar.style.opacity = '1'

        }, 2000)

      }, 2000)

    }, 2000)

  }, 2000)

}, 0)

app.appendChild(welcomeMessage)
app.appendChild(exploreMessage)