import { AnimationContext } from './animatedElement'
import createSearchBar from './searchBar'
import createMessage from './message'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const welcomeMessage = createMessage("Welcome to the Pokémon World!")
const exploreMessage = createMessage("Explore it!")
const searchBar = createSearchBar()

app.appendChild(welcomeMessage.element)
app.appendChild(exploreMessage.element)
app.appendChild(searchBar.element)

const defaultContext = new AnimationContext()

const animationCards = 
[
  welcomeMessage.createFadeInCard(),
  welcomeMessage.createFadeOutCard(),
  exploreMessage.createFadeInCard(),
  exploreMessage.createFadeOutCard(),
  searchBar.createFadeInCard()
]

animationCards.forEach(function addCardToDefaultContext(card) {
  defaultContext.add(card)
})

defaultContext.start()