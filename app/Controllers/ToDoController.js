import { ProxyState } from "../AppState.js";
import { getToDoForm } from "../Models/ToDoForm.js";
import { todoService } from "../Services/ToDoService.js";
import { Pop } from "../Utils/Pop.js";

function _drawToDo() {
    console.log("To Do _Draw Loaded");
    let template = ''
    let task = ProxyState.todo
    task.forEach(t => template += t.Template);
    document.getElementById('list').innerHTML = template
    document.getElementById('form').innerHTML = getToDoForm()
    document.getElementById('total').innerHTML = `
    <div class="text-white">
      <div class="d-flex justify-content-between">
         <div>
            <b>Completed Task: ${ProxyState.todo.filter(t => t.completed).length} / ${ProxyState.todo.length}
            </b>
        </div>
      </div>
    </div>
    `
    
}

export class ToDoController {
    constructor() {
        _drawToDo()
        ProxyState.on('todo', _drawToDo)
        this.getToDo()
        console.log('To Do Controller loaded')
    }


    async getToDo() {
        try {
            await todoService.getToDo()
        } catch (error) {
            Pop.error(error)
            console.log('[Get ToDo]', error)
        }
    }

    async createToDo() {
        try {
            window.event.preventDefault()
            let form = window.event.target

            let newToDo = {
                description: form.description.value,
            }
            await todoService.createToDo(newToDo)
            form.reset()
        } catch (error) {
            Pop.error("Please enter a task")
            console.log('[Create To Do]', error);
        }
    }

    async deleteToDo(toDoId){
        try {
            const yes = await Pop.confirm('Delete Task')
            if (!yes) { return }
            await todoService.deleteToDo(toDoId)
        } catch (error) {
            console.log('[Delete ToDo]', error)
            Pop.error(error)
        }
    }

    async toggleToDo(toDoId){
        try {
            await todoService.toggleToDo(toDoId)
        } catch (error) {
            console.log('[toggle To Do]', error)
            Pop.error(error)
        }
    }
}