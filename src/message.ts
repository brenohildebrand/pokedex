function createHiddenMessage(message: string) {
    const box = document.createElement('div')
    const paragraph = document.createElement('p')

    paragraph.innerText = message
    paragraph.style.fontSize = '5rem'
    box.appendChild(paragraph)

    box.style.transition = 'opacity 2s ease-in-out'
    box.style.position = 'absolute'
    box.style.opacity = '0'

    return box
}

export default createHiddenMessage