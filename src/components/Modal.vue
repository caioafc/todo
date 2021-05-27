<script>
  export default {
    name: 'Modal',
    data: function () {
      return {
        "todo": {
          "id": "",
          "description": "",
          "status": ""
        }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      addTodo() {
        if (this.todo.description && this.todo.status) {
          this.$store.commit('addNewTodo', this.todo)
        }
        document.getElementById("form").reset();
      }
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <section class="modal-header">
        <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
          <slot name="body">
            <img src="../assets/list.svg" alt="todo" id="modalImage">
            Add New To Do
          </slot>
        </section>
        <section class="modal-body"> 
            <form @submit.prevent="addTodo" id="form">
                <label for="todoDescription">Description</label>
                <textarea v-model="todo.description" name="todoDescription" id="todoDescription" cols="30" rows="10"></textarea>
                <label for="todoStatus">Status</label>
                <select v-model="todo.status" name="todoStatus" id="todoStatus">
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit" name="button" @click="close">Add</button>
            </form>
        </section>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 600px;
  }

  .modal-header {
    position: relative;
    padding: 20px 10px;
    font-size: 25px;
    display: flex;
    align-items: center;
  }

  #modalImage {
    max-width: 50px;
    width: auto;
    height: auto;
    margin-right: 10px;
    margin-left: 15px;
  }

    form {
        display: flex;
        flex-direction: column;
        margin: 0px 50px 00px 50px;
    }

    label {
        margin-top: 10px;
    }

    select {
        height: 30px;
    }

    form button{
        margin-top: 60px;
        margin-bottom: 30px;
        height: 30px;
    }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 30px;
    margin-right: 10px;
    margin-top: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #000000;
    background: transparent;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>