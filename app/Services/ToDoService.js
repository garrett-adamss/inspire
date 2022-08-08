import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"
import { sandboxApi } from "./AxiosService.js"

class ToDoService{
   async getToDo(){
      let res = await sandboxApi.get('/todos')
      ProxyState.todo = res.data.map(t => new ToDo(t))
   }
   async createToDo(toDoFormData){
    let res = await sandboxApi.post('/todos', toDoFormData)
    let toDo = new ToDo(res.data)
    ProxyState.todo = [...ProxyState.todo, toDo]
   }
}

export const todoService = new ToDoService()