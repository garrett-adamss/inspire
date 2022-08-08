import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/ToDoService.js";
import { Pop } from "../Utils/Pop.js";

function _drawToDo() {
    console.log("To Do _Draw Loaded");
    let template = ''
    ProxyState.todo.forEach(t => template += t.Template);
}

export class ToDoController {
    constructor() {
        ProxyState.on('todo', _drawToDo)
        this.getToDo
        console.log('To Do Controller loaded')
    }

    async getToDo() {
        try {
            console.log("getToDo loaded")
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
                description: form.description.value
            }
            await todoService.createToDo(newToDo)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.log('[Create ToDo]', error);
        }
    }
}