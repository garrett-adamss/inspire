export class Quote {
    constructor(data){
        this.content = data.content,
        this.author = data.author
    }

    get Template(){
        return`
        <div class="text-center">
        <p class="on-hover text-light m-0 no-select">${this.author}</p>
        <div class="text-light m-0"><h5>${this.content}</h5></div>
        </div>
        
        `
    }
}