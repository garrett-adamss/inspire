export class Quote {
    constructor(data){
        this.content = data.content,
        this.author = data.author
    }

    get Template(){
        return`
        <div>Quote: ${this.content} by: ${this.author}</div>
        `
    }
}