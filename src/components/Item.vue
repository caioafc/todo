<template>
    <div id="item">
        <form @submit.prevent="saveTodo(todo)" action="" id="formItem">
            <p id="id">{{idColumn}}</p>
            <p v-show="!editMode" id="description">{{descriptionColumn}}</p>
            <p v-show="!editMode" id="status">{{statusColumn}}</p>
                <input v-show="editMode" type="text" v-model="todo.description">
                <select v-show="editMode" name="todoStatus" id="todoStatus" v-model="todo.status">
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                </select>
                <img v-show="!editMode" v-if="!this.editColumn" src="../assets/edit-dark.svg" alt="editIcon" @click="editTodo(idColumn)" class="action-image">
                <button v-show="editMode" type="submit">
                    <img src="../assets/save.svg" alt="saveIcon" type="submit" class="action-image">
                </button>
            <p v-if="this.editColumn" id="edit">{{editColumn}}</p>
            <img v-if="!this.removeColumn" src="../assets/remove-dark.svg" alt="removeIcon" @click="removeTodo(idColumn)" class="action-image">
            <p v-if="this.removeColumn" id="remove">{{removeColumn}}</p>
        </form>

    </div>
</template>

<script>
export default {
    props:['idColumn', 'descriptionColumn', 'statusColumn', 'editColumn', 'removeColumn', 'editMode'],
    methods: {
        removeTodo(todoId) {
            this.$store.commit('removeTodo', todoId)
        },
        editTodo(todoId) {
            this.$store.commit('editTodo', todoId)
        },
        saveTodo(todo) {
            this.$store.commit('saveTodo', todo)
        }
    },
    data: function () {
        return {
            "todo": {
                "id": this.idColumn,
                "description": this.descriptionColumn,
                "status": this.statusColumn,
                "editMode": ""
            }
        }
    }
}
</script>

<style>
    #item {
        height: 64px;
    }
    #formItem {
        margin: 0;
        width: 100%;
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
    .action-image {
        cursor: pointer
    }
    #formItem input {
        min-width: 90%;
        min-height: 70%;
    }
    #formItem select {
        min-width: 50%;
        min-height: 70%;
    }
    #formItem button {
        margin: 0 !important;
        width: 100%;
        height: 100%;
        background-color: Transparent;
        border: none;
        cursor:pointer;
        
    }

</style>