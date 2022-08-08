
export class Weather {
    constructor(data) {
        this.feels_like = data.feels_like
        this.humidity = data.humidity
        this.pressure = data.pressure
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.temp_min = data.temp_min
        this.click = false
    }

    get Template() {
        return `
        <div class="text-light no-select hover" onclick="app.weatherController.toggleTemp()">${this.convert} ${this.click ? "C" : "F"}</div>
        `
    }

    get convert() { 
        let w = 0;
        if (this.click) {
            let temp = this.temp
            w = Math.round(parseFloat(temp)-273.15)
        } else {
            let temp = this.temp
            w = Math.round(((parseFloat(temp)-273.15)*1.8)+32)
        }
        return (w)
    }
}




