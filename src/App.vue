<template>
  <div id="app">
    <header>
      <div id="logo">
        <img src="./assets/logo.svg" alt="logo" class="logo">
        <h1 class="logo">ToDo List</h1>
      </div>
      <button 
        id="addButton"
        type="button"
        @click="showModal"
      >
        <img src="./assets/plus.svg" alt="add">
        <p>Add new ToDo</p>
      </button>
      <!-- <img src="./assets/plus.svg" alt="add" class="header-content"> -->
    </header>
    <div id="body">
      <List id="list"/>
      <Modal 
        v-show="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue'
  import Modal from './components/Modal.vue';
  import * as data from "../data.json"

  var teste = []
  for(var todo in data.default) {
    teste.push(data.default[todo])
  }
  console.log(teste)

  export default {
    name: 'App',
    components: {
      List,
      Modal
    },
    data: function() {
      return {
        isModalVisible: false,
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    created: function (){
      this.$store.commit('setTodoList', data.default)
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  body {
    margin: 0;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background: #f0f0f0;
    font-family: 'Montserrat', sans-serif;
    /* background: linear-gradient(180deg, rgba(162,162,162,1) 0%, rgba(181,181,181,1) 46%, rgba(213,213,213,1) 100%); */
  }

  #body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: #000c7cb7;
  }

  #logo {
    display: flex;
    position: relative;
    left: 20px;
    margin-right: 20px;
  }
  
  header h1 {
    color: #ffffff;
    font-size: 25px
  }

  header #logo img {
    max-width:40px;
    width: auto;
    height: auto;
    margin-right: 2vh;
  }

  #list {
    color: #000000;
    
    font-size: 20px
  }
  #addButton {
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-color: Transparent;
    border: none;
    cursor:pointer;
    overflow: hidden;
    font-size: 15px;
    color: #ffffff;
  }

  #addButton img {
    max-width:20px;
    width: auto;
    height: auto;
    margin-right: 1vh;
  }
</style>
