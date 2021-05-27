import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        setTodoList(context, todos) {
            for(var todo in todos) {
                context.todos.push(todos[todo])
            }
        },
        addNewTodo(context, todo) {
            context.todos.push(todo)
        }
    },
    getters: {
        getAllTodos(context) {
            return context.todos
        }
    }
  })

export default store