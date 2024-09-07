import { gameState } from ".."

export default class Point {
    constructor() {
        this.loseScore = document.querySelector('.lose-score')
        this.winScore = document.querySelector('.win-score')
    }

    addPunchPoint() {
        this.winScore.textContent = Number(this.winScore.textContent) + 1
    }

    addMissPoint() {
        this.loseScore.textContent = Number(this.loseScore.textContent) + 1
        if (Number(this.loseScore.textContent) == 5) {
            clearInterval(gameState)
            alert('Вы проиграли')
        }
    }
}