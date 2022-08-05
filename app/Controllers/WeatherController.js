import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"

// THIS IS FOR DRAW AND ARRAY (FOR EACH MEMBER OF THE ARRAY PRINT TEMPLATE)
// function _drawWeather() {
//     let template = ''
//     ProxyState.weather.forEach(w => template += w.WeatherTemplate)
//     document.getElementById('weather').innerHTML = template
// }

//FOR OBJECT (ONLY ONE SO YOU PRINT ONE)
function _drawWeatherTest(){
    let weather = ProxyState.weather
    document.getElementById('weather').innerHTML = weather.Template //id body .backgroundimg = img template that is url(imglink)
}

export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeatherTest)
        console.log('test')
        // _drawWeather() //
        // _drawWeatherTest()
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
            console.log('weather controller loaded')
        } catch (error) {
            Pop.error(error)
            console.log('[Get Weather]', error)
        }
    }
}