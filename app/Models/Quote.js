export class Quote {
    constructor(data){
        this.content = data.content,
        this.author = data.author
    }

    get Template(){
        return`
        <div class="text-center">
        <p class="on-hover text-light m-0">${this.author}</p>
        <div class="text-light m-0">Quote: ${this.content} by: ${this.author}</div>
        </div>
        
        `
    }
}