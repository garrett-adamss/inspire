import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService { 
    async getWeather() {
        console.log('weather service loaded')
        const res = await sandboxApi.get('/weather')
        // console.log("res.data", res.data)
        // console.log("res.data.main", res.data.main)
        // MAP IS FOR ARRAY
        // ProxyState.weather = res.data.main.map(w => new Weather(w)) 
        // THIS IS FOR OBJECTS
        ProxyState.weather = new Weather(res.data.main)
    }
}

export const weatherService = new WeatherService()