import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService {
    async getWeather() {
        const res = await sandboxApi.get('/weather')
        // console.log("res.data", res.data)
        // console.log("res.data.main", res.data.main)
        // MAP IS FOR ARRAY
        // ProxyState.weather = res.data.main.map(w => new Weather(w)) 
        // THIS IS FOR OBJECTS
        ProxyState.weather = new Weather(res.data.main)
    }

    // async toggleWeather() {
    //     let temp = Weather(temp)
    //     let cel = Math.round(parseFloat(temp)-273.15)
    //     let far = Math.round(((parseFloat(temp)-273.15)*1.8)+32)
    //     if (temp == far) {
    //         temp == cel
    //         console.log("set cel", cel);
    //         return temp
    //     } else {
    //         temp == far
    //         console.log("set far", far );
    //         return temp
    //     }
    // }
}

export const weatherService = new WeatherService()