import Vuex from 'vuex'
import Vue from 'vue'
import { getAllTodos, deleteTodo, addNewTodo } from '../factory/requests'


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
            const todos = this.getters.getAllTodos
            const newTodo = {
                id: todos.length ? parseInt(todos[todos.length-1].id) + 1 : 1,
                description: todo.description,
                status: todo.status,
                editMode: false
            }
            addNewTodo(newTodo)
            context.todos.push(newTodo)
        },
        removeTodo(context, todoId) {
            deleteTodo(this.getters.getTodoById(todoId)._id)
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
    },
    actions: {
        async fetchTodos() {
            try {
                const allTodos = await getAllTodos()
                this.commit('setTodoList', allTodos)
            } catch (e) {
                console.log(e.message)
            }
        }
    }
  })

export default store