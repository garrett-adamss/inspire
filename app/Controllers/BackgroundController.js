import { ProxyState } from "../AppState.js";
import { backgroundService } from "../Services/BackgroundService.js";
import { Pop } from "../Utils/Pop.js";

function _draw(){
    let background = ProxyState.background
    document.body.style.backgroundImage = background.Template
}

export class BackgroundController {
    constructor(){
        ProxyState.on('background', _draw)
        this.getBackground()
    }

    async getBackground(){
        try {
            await backgroundService.getBackground()
        } catch (error) {
            Pop.error(error)
            console.log('[Get Background]', error)
        }
    }
}