<template>
  <div class="">
    <h3>Att Göra</h3>
    <div class="desc">
      <span>Dblklicka för markera som klar</span>
      <span>
        <span> <span class="incomplete"></span>EJ KLAR </span>
        <span> <span class="complete"></span> KLAR </span>
      </span>
    </div>
    <div class="todos">
      <div
        @click="imDone(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="delete">X</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    imDone(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

    //   this.updateTodo(updTodo);
	console.log('klicked');
      this.updateTodo(updTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: #f5f5f5;
}

.delete {
  height: 20px;
  width: 20px;
  border-radius: 99rem;
  background: tomato;
  color: #f5f5f5;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}

.complete {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: chartreuse;
}

.incomplete {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b884;
}

.is-complete {
  background: chartreuse;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
