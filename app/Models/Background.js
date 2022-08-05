export class Background{
    constructor(data){
        this.largeImgUrl = data.largeImgUrl
    }

    get Template(){
        return `
        url(${this.largeImgUrl})
        `
    }
}