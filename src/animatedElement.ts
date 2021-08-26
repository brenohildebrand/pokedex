class AnimationContext {
    animationQueue: AnimationCard[]
    previousAnimationDuration: number

    constructor() {
        this.animationQueue = []
        this.previousAnimationDuration = 0
    }

    // Mechanics
    start() {
        console.log(this.animationQueue)
        setTimeout(() => this.runAnimationQueue())
    }

    add(animationCard: AnimationCard) {
        this.animationQueue.push(animationCard)
    }

    runAnimationQueue() {
        if(this.animationQueue.length > 0) {
            setTimeout
            (
                () => {
                    this.runNextAnimation()
                    this.runAnimationQueue()
                },
                this.previousAnimationDuration
            )
        }
    }

    runNextAnimation() {
        const nextAnimationCard = this.animationQueue.shift()
        nextAnimationCard?.animate()
        this.previousAnimationDuration = nextAnimationCard?.duration || 0
    }
}

class AnimatedElement {
    element: HTMLElement

    constructor(tagName = 'div') {
        this.element = document.createElement(tagName);
        this.element.style.position = 'absolute'
        this.element.style.opacity = '0'
    }

    createFadeInCard(): AnimationCard {
        return {
            name: 'fadeIn',
            duration: 3000,
            animate: () => runFadeIn.call(this)
        }
    }

    createFadeOutCard(): AnimationCard {
        return {
            name: 'fadeOut',
            duration: 3000,
            animate: () => runFadeOut.call(this)
        }
    }
} 

function runFadeIn(this: AnimatedElement) {
    this.element.style.transition = 'opacity 2s ease-in-out 1s'
    this.element.style.opacity = '1'
}

function runFadeOut(this: AnimatedElement) {
    this.element.style.transition = 'opacity 2s ease-in-out 1s'
    this.element.style.opacity = '0'
}

export default AnimatedElement
export { AnimationContext }