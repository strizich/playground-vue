<template>
  <div class="todo-list">
    <input type="text" v-model="todos.newItem" @keypress.enter="makeNewTodo()"/>
    <button @click="makeNewTodo()">
      Make
    </button>
    <ul class="todo">
      <li 
        v-for="item in todos.items"
        :class="{'todo__item': true, 'is--complete': item.completed}"
        :key="item.id"
      >  
        <label>
          <input type="checkbox" v-model="item.completed"/>
          <span>
            {{item.message}}
          </span>
        </label>
        <button @click="handleRemove(item)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup () {
    const todos = reactive({
      newItem: '',
      items: [
        {
          message: 'one',
          id: 1,
          completed: false
        }, {
          message: 'two',
          id: 2,
          completed: false
        }
      ]
    })

    const makeNewTodo = () => {
      const newTodo = {
        id: todos.items.length + 1,
        message: todos.newItem,
        completed: false
      }
      if(todos.newItem) {
        todos.items.push(newTodo)
        todos.newItem = ''
      }
    }

    const handleRemove = (item) => {
      todos.items = todos.items.filter((todo) => todo.id !== item.id)
    }

    return {
      todos,
      makeNewTodo,
      handleRemove
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list{
  max-width: 600px;
  margin: 0 auto;
}
.todo {
  &__item {
    padding: 8px 16px;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    transition: all .23s ease-in-out;
    &.is--complete {
      color: #cccccc;
      text-decoration: line-through;
    }
  }
}
</style>