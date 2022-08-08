import { ProxyState } from "../AppState.js"
import { ToDo } from "../Models/ToDo.js"
import { sandboxApi } from "./AxiosService.js"

class ToDoService{
   async toggleToDo(toDoId){
      let todo = ProxyState.todo.find(t => t.id == toDoId)
      if(!todo){
         throw new Error('Bad Task id')
      }

      todo.completed = !todo.completed
      let todoIndex = ProxyState.todo.indexOf(todo)

      let res = await sandboxApi.put(`/garrett/todos/${toDoId}`, todo)
      let updatedToDo = new ToDo(res.data)
      ProxyState.todo.splice(todoIndex, 1, updatedToDo)
      ProxyState.todo = ProxyState.todo
   }

   async getToDo(){
      let res = await sandboxApi.get(`/garrett/todos`)
      ProxyState.todo = res.data.map(t => new ToDo(t))
   }

   async createToDo(toDoFormData){
    let res = await sandboxApi.post(`/garrett/todos`, toDoFormData)
    let toDo = new ToDo(res.data)
    ProxyState.todo = [...ProxyState.todo, toDo]
   }

   async deleteToDo(toDoId){
      await sandboxApi.delete(`/garrett/todos/${toDoId}`)
      ProxyState.todo = ProxyState.todo.filter(t => t.id != toDoId)
   }


}

export const todoService = new ToDoService()