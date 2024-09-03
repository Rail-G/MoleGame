export default class Game {
    constructor () {
        this.gameBlock = document.querySelector('.game-block')
        this.loseScore = document.querySelector('.lose-score')
        this.winScore = document.querySelector('.win-score')
        this.entered = true
    }

    drawBlock() {
        for (let i = 0; i < 16; i++) {
            const div = document.createElement('div')
            div.classList.add('block')
            div.addEventListener('click', () => {
                if (this.entered) {
                    if (div.classList.contains('active-block')) {
                        this.winScore.textContent = Number(this.winScore.textContent) + 1
                    } else {
                        this.loseScore.textContent = Number(this.loseScore.textContent) + 1
                    }
                }
                this.entered = false
            })
            this.gameBlock.appendChild(div)
        }
    }

    npcStart() {
        const firstBlock = this.gameBlock.firstChild
        firstBlock.classList.add('active-block')
    }

    npcSteps() {
        const allBlock = this.gameBlock.querySelectorAll('.block')
        const randomId = Math.floor(Math.random() * allBlock.length)
        this.gameBlock.querySelector('.active-block').classList.remove('active-block')
        allBlock[randomId].classList.add('active-block')
    }
}
