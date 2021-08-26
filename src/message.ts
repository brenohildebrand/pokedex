import AnimatedElement from "./animatedElement"

function createMessage(message: string) {
    const animatedBox = new AnimatedElement()
    const paragraph = document.createElement('p')

    paragraph.innerText = message
    paragraph.style.fontSize = '5rem'
    animatedBox.element.appendChild(paragraph)

    return animatedBox
}

export default createMessage