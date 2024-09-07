import Game from "./js/game.js";
import './css/style.css'

const obj = new Game()
obj.drawBlock()
obj.npcStart()
export const gameState = setInterval(() => {
    obj.entered = true
    obj.npcSteps()
}, 1000)

