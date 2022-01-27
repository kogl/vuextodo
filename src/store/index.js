import Vuex from 'vuex'
import Vue from 'vue'
import todos from './modules/todos'


// ladda in vue
Vue.use(
	Vuex
)


// Skapar Vuex Store
export default new Vuex.Store({
	modules: {
		todos
	}
});