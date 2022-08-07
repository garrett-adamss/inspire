import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

export class Weather {
    constructor(data) {
        this.feels_like = data.feels_like
        this.humidity = data.humidity
        this.pressure = data.pressure
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.temp_min = data.temp_min
    }

    tempConversion(){
        let temp = this.temp
        let far = Math.round(((parseFloat(temp)-273.15)*1.8)+32)
        return far
    }



    get Template() {
        return `
        <div class="text-light" onclick="">${this.tempConversion()}</div>
        `
    }
}


