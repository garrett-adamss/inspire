export class ToDo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || ''
        this.description = data.description || false
    }

    get Template(){ 
        return`
        <div class="text-white">
        <div class="d-flex justify-content-between m-1">
          <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todoController.toggleToDo('${this.id}')">
          <b>${this.description}</b>
          <button class="selectable btn-outline-danger btn-sm text-dark" onclick="app.todoController.deleteToDo('${this.id}')"><i class ="mdi mdi-delete"></i></button>

        </div>
        <div>
        </div>
      </div>
        `
    }
}