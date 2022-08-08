import { ToDo } from "./ToDo.js";

export function getToDoForm(todo = new ToDo({})){
    let submitAction = "app.todoController.createToDo()"

    return `
    <form onsubmit="${submitAction}">
    <label for="description">Add New To Do</label>
    <button class ="btn-sm btn-outline-success"type="submit">+</button>
    <input class="elevation-2" minlength="1" type="text" id="description" name="description" preview="New To Do"><br>
  </form>
    `

}