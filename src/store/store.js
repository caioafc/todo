import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: [],
    },
    mutations: {
        setTodoList(context, todos) {
            for(var todo in todos) {
                todos[todo].editMode = false
                context.todos.push(todos[todo])
            }
        },
        addNewTodo(context, todo) {
            const newTodo = {
                id: this.getters.getAllTodos.length + 1,
                description: todo.description,
                status: todo.status,
                editMode: false
            }
            context.todos.push(newTodo)
        },
        removeTodo(context, todoId) {
            context.todos.splice(this.getters.getAllTodos.indexOf(this.getters.getTodoById(todoId)), 1);
        },
        editTodo(context, todoId) {
            this.getters.getTodoById(todoId).editMode = true
        },
        saveTodo(context, todo) {
            const editedTodo = context.todos[this.getters.getAllTodos.indexOf(this.getters.getTodoById(todo.id))]
            editedTodo.editMode = false
            editedTodo.status = todo.status
            editedTodo.description = todo.description
        }
    },
    getters: {
        getAllTodos(context) {
            return context.todos
        },
        getTodoById(context) {
            return (id) => context.todos.find(todo => {return todo.id == id})
        },
    }
  })

export default store