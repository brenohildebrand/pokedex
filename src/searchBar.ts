import AnimatedElement from "./animatedElement"

function createSearchBar() {
    const animatedBox = new AnimatedElement()
    animatedBox.element.style.display = 'flex'
    animatedBox.element.style.flexDirection = 'row'
    animatedBox.element.style.justifyContent = 'center'
    animatedBox.element.style.alignItems = 'center'

    const pokeball = createPokeball()
    pokeball.style.marginRight = '3vw'
    pokeball.style.height = '10vh'
    pokeball.style.minHeight = '120px'

    const searchBar = document.createElement('input');
    searchBar.setAttribute('placeholder', 'search for a Pokémon')
    searchBar.style.padding = '5px 10px'
    searchBar.style.borderRadius = '50px'
    searchBar.style.outline = 'none'
    searchBar.style.border = '1px solid black'
    searchBar.style.width = '22vw'
    searchBar.style.height = '7vh'
    searchBar.style.minWidth = '350px'
    searchBar.style.minHeight = '70px'
    searchBar.style.fontSize = '1.2rem'
    searchBar.style.textAlign = 'center'

    animatedBox.element.appendChild(pokeball)
    animatedBox.element.appendChild(searchBar)

    return animatedBox
  }
  
  function createPokeball() {
    const xmlns = "http://www.w3.org/2000/svg"
  
    const pokeball = document.createElementNS(xmlns, 'svg')
    pokeball.setAttributeNS(null, "viewBox", `0 0 100 100`);
  
    const redCircle = document.createElementNS(xmlns, 'path')
    redCircle.setAttributeNS(null, 'd', 'M5,50 a1,1 0 0,1 90,0')
    redCircle.setAttributeNS(null, 'fill', 'red')
  
    const whiteCircle = document.createElementNS(xmlns, 'path')
    whiteCircle.setAttributeNS(null, 'd', 'M5,50 a1,1 0 0,0 90,0')
    whiteCircle.setAttributeNS(null, 'fill', 'white')
  
    const leftRectangle = document.createElementNS(xmlns, 'rect')
    leftRectangle.setAttributeNS(null, 'x', '5')
    leftRectangle.setAttributeNS(null, 'y', '47.5')
    leftRectangle.setAttributeNS(null, 'width', '45')
    leftRectangle.setAttributeNS(null, 'height', '5')
    leftRectangle.setAttributeNS(null, 'stroke', 'black')
  
    const rightRectangle = document.createElementNS(xmlns, 'rect')
    rightRectangle.setAttributeNS(null, 'x', '50')
    rightRectangle.setAttributeNS(null, 'y', '47.5')
    rightRectangle.setAttributeNS(null, 'width', '45')
    rightRectangle.setAttributeNS(null, 'height', '5')
    rightRectangle.setAttributeNS(null, 'stroke', 'black')
  
    const middleCircle = document.createElementNS(xmlns, 'circle')
    middleCircle.setAttributeNS(null, 'cx', '50')
    middleCircle.setAttributeNS(null, 'cy', '50')
    middleCircle.setAttributeNS(null, 'r', '8')
    middleCircle.setAttributeNS(null, 'stroke', 'black')
    middleCircle.setAttributeNS(null, 'stroke-width', '5')
    middleCircle.setAttributeNS(null, 'fill', 'white')
  
    const pokeballCircle = document.createElementNS(xmlns, 'circle')
    pokeballCircle.setAttributeNS(null, 'cx', '50')
    pokeballCircle.setAttributeNS(null, 'cy', '50')
    pokeballCircle.setAttributeNS(null, 'r', '47.5')
    pokeballCircle.setAttributeNS(null, 'stroke', 'black')
    pokeballCircle.setAttributeNS(null, 'stroke-width', '5')
    pokeballCircle.setAttributeNS(null, 'fill', 'none')
  
    pokeball.appendChild(whiteCircle)
    pokeball.appendChild(redCircle)
    pokeball.appendChild(leftRectangle)
    pokeball.appendChild(rightRectangle)
    pokeball.appendChild(middleCircle)
    pokeball.appendChild(pokeballCircle)
  
    return pokeball
  }

  export default createSearchBar