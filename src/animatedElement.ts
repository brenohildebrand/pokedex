type AnimationCard = {
    name: string
    duration: number
    animate: Function
}

class AnimatedElement {
    element: HTMLElement
    animationQueue: AnimationCard[]

    constructor(tagName = 'div') {
        this.element = document.createElement(tagName);
        this.element.style.position = 'absolute'
        this.animationQueue = []

        setTimeout(() => this.runAnimationQueue())
    }
    
    // Mechanics
    runAnimationQueue() {
        let previousAnimationDuration = 0
        while(this.animationQueue.length > 0) {
            const nextAnimationCard = this.animationQueue.shift()
            const 
            { 
                //name,
                animate, 
                duration 
            } = nextAnimationCard!

            setTimeout(() => animate.call(this), previousAnimationDuration)

            //console.log('animating:', name)

            previousAnimationDuration = duration
        }
    }

    // Animations
    fadeIn() {
        this.animationQueue.push 
        (
            {
                name: 'fadeIn',
                duration: 3000,
                animate: function runFadeIn(this: AnimatedElement) {
                    this.element.style.transition = 'opacity 2s ease-in-out 1s'
                    this.element.style.opacity = '1'
                }    
            }
        )
    }
  
    fadeOut() {
        this.animationQueue.push
        (
            {
                name: 'fadeOut',
                duration: 3000,
                animate: function runFadeOut(this: AnimatedElement) {
                    this.element.style.transition = 'opacity 2s ease-in-out 1s'
                    this.element.style.opacity = '0'
                }
            }
        )
    }

} 

export default AnimatedElement