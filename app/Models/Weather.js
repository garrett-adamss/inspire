export class Weather{ 
    constructor(data){
        this.feels_like = data.feels_like
        this.humidity = data.humidity
        this.pressure = data.pressure
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.temp_min = data.temp_min
    }

     
    get Template(){
        return `
        <div>Temp: ${this.temp}</div>
        `
    }
}