export class ToDo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || ''
        this.description = data.description || false
    }

    get Template(){ 
        return`
        <div class="text-white">
        <div>
          <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleToDo('${this.id}')">
          <b>${this.description}</b>
        </div>
        <div>
          <button class="selectable btn-outline-danger btn text-dark" onclick="app.todoController.deleteToDo('${this.id}')"><i class ="mdi mdi-delete"></i></button>
        </div>
      </div>
        `
    }
}