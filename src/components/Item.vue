<template>
    <div id="item">
        <p id="id">{{idColumn}}</p>
        <p id="description">{{descriptionColumn}}</p>
        <p id="status">{{statusColumn}}</p>
        <img v-if="!this.editColumn" src="../assets/edit-dark.svg" alt="editIcon">
        <p v-if="this.editColumn" id="edit">{{editColumn}}</p>
        <img v-if="!this.removeColumn" src="../assets/remove-dark.svg" alt="removeIcon">
        <p v-if="this.removeColumn" id="remove">{{removeColumn}}</p>
    </div>
</template>

<script>
export default {
    props:['idColumn', 'descriptionColumn', 'statusColumn', 'editColumn', 'removeColumn']
}
</script>

<style>
    #item {
        height: 64px;
        display: grid;
        grid-template-columns: repeat(5, 20%);
        justify-items: center;
        align-items: center;
    }
    img {
        max-width:24px;
        width: auto;
        height: auto;
    }
</style>