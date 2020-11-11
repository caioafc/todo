<template>
  <div id="app">
    <header>
      <img src="./assets/logo.svg" alt="logo" class="header">
      <h1 class="header">ToDo List</h1>
      <button>Add a card</button>
    </header>
    <div id="corpo">
      <List />
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue'


  export default {
    name: 'App',
    components: {
      List
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: #f0f0f0;
    /* background: linear-gradient(180deg, rgba(162,162,162,1) 0%, rgba(181,181,181,1) 46%, rgba(213,213,213,1) 100%); */
  }

  #corpo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    background-color: #000c7cb7;
  }

  .header {
    position: relative;
    left: 20px;
    margin-right: 20px;
  }

  button {
    margin-left: 80vw;
    border-bottom: 0px;
    border:none!important;
  }
  
  header h1 {
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px
  }

  header img {
    max-width:40px;
    width: auto;
    height: auto;
    margin-right: 2vh;
  }
</style>
