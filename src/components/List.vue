<template>
  <div id="list">
      <h1>Title</h1>
      <div id="body">
        <p>
            teste
        </p>
        
        
      </div>
      <img src="../assets/add.svg" alt="add-button">
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #list {
        position: relative;
        top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 800px;
        width: 350px;
        border-radius: 30px;
        background-color: #ffffff;
        border: 1px solid #dbd7d7
    }

    #list img {
        position: sticky;
        top: 100vh;
        left: 70vw;
        padding: 20px;
    }
</style>