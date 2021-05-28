const http = require("./http");
const url = "https://ln-todo-api.herokuapp.com/items"

module.exports = {
    getAllTodos() {
        return http.get(url)
    },
    deleteTodo(todoMongoId) {
        return http.delete(url+'/'+todoMongoId)
    },
    addNewTodo(todo) {
        return http.post(url, todo)
    }
}
