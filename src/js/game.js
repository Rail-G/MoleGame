import Point from "./points"

export default class Game {
    constructor () {
        this.gameBlock = document.querySelector('.game-block');
        this.entered = true;
        this.gameState = undefined;
        this.points = new Point()
    }

    drawBlock() {
        for (let i = 0; i < 16; i++) {
            const div = document.createElement('div')
            div.classList.add('block')
            this.gameBlock.appendChild(div)
        }
        document.querySelector('.game-block').addEventListener('click', (e) => {
                if (this.entered) {
                    if (e.target.closest('.block').classList.contains('active-block')) {
                        this.points.addPunchPoint()
                    } else {
                        this.points.addMissPoint()
                    }
                }
                this.entered = false
            })
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
