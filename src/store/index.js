import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store=new Vuex.Store({
    state() {
        return {
            todos: []
        }
    },
    mutations: {
        addTodo(state, item) {
            state.todos.unshift(item);
        }
    }
})