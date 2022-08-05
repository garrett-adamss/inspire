import { ProxyState } from "../AppState.js"
import { Background } from "../Models/Background.js"
import { sandboxApi } from "./AxiosService.js"

class BackgroundService{
    async getBackground(){
        const res = await sandboxApi.get('/images')
        // console.log('res.data', res.data)
        ProxyState.background = new Background(res.data)
    }
}

export const backgroundService = new BackgroundService()