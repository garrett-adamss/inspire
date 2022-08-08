export class ToDo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || ''
        this.description = data.description || false
    }

    get Template(){ 
        return`
        <div> test </div>
        `
    }
}