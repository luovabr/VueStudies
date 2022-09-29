<template>
    <div>
        <div class="box" v-bind:class="{status: tarefa.status}">
            {{tarefa.title}}
            <button @click="invertStatus()">Mude o estado desta atividade!</button>
            <button @click="$emit('tarefaDeletada', tarefa)">Delete esta atividade!</button>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        tarefa: Array
    },
    methods:   {
        invertStatus() {
            this.tarefa.status = !this.tarefa.status
        }
    }
}
</script>

<style scoped>
.box {
    width: 200px;
    background-color: gray;
    padding: 50px;
    margin: 20px;
}
.status{
    background-color: green;
}

</style>