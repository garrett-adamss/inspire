export class Quote {
    constructor(data){
        this.content = data.content,
        this.author = data.author
    }

    get Template(){
        return`
        <div class="text-center no-select">
        <p class="on-hover text-style m-0">${this.author}</p>
        <div class="text-style m-0"><h5>${this.content}</h5></div>
        </div>
        
        `
    }
}