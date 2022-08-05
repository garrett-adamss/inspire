import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"
import { sandboxApi } from "./AxiosService.js"

 

 class QuoteService{
    async getQuote(){
        console.log("quote controller loaded")
        const res = await sandboxApi('/quotes')
        console.log("res", res)
        ProxyState.quote = new Quote(res.data)
    }
 }

 export const quoteService = new QuoteService()