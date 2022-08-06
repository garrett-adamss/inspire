class ToDoService{
   async getToDo(){
    console.log('To Do Service loaded')
   }
   async createToDo(newToDo){
    let res = await sandboxApi.post('/garrett', toDoFormData)
    let toDo = new ToDo(res.data)
    ProxyState.
   }
}

export const todoService = new ToDoService()