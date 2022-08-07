import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote(){
    let quote = ProxyState.quote 
    document.getElementById('quote').innerHTML = quote.Template
}

export class QuoteController {
    constructor(){
        ProxyState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote(){
        try {
            await quoteService.getQuote()
        } catch (error) {
            Pop.error(error)
            console.log('[Get quote]', error)
        }
    }
}