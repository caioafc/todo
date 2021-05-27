<template>
  <div id="list">
      <div id="list-header">
          <Item 
            :idColumn="header.id"
            :descriptionColumn="header.description"
            :statusColumn="header.status"
            :editColumn="header.edit"
            :removeColumn="header.remove"
          />
      </div>
    <scroll ref="scroll" id="list-body"> 
        <Item v-for="(todo, index) in todos" :key="index"
            :idColumn="todo.id"
            :descriptionColumn="todo.description"
            :statusColumn="todo.status"
            :editMode="todo.editMode"
        />
    </scroll>
  </div>
</template>

<script>
    import Item from './Item.vue'

    export default {
        name: 'List',
        components: {
            Item
        },

        data: function () {
            return {
                header: {
                    id: 'ID',
                    description: 'Description',
                    status: 'Status',
                    edit: 'Edit',
                    remove: 'Remove'
                },
                todos: this.$store.getters.getAllTodos
            }
        }
    }
</script>

<style>
    #list {
        margin-top: 80px;
        height: 700px;
        width: 1500px;
        flex-direction: column;
        border-radius: 30px;
        background-color: #ffffff;
        border: 1px solid #dbd7d7
    }
    #list-header {
        border-bottom: 1px solid #dbd7d7;
    }
    #list-body {
        margin-top: 10px
    }
    .ps {
        height: 600px;
    }
</style>