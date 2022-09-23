<template>
  <div id="app">
      {{ titulo }}
      <HelloWorld /> 
      <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        HelloWorld
    },
    data: function() {
        return {
            titulo: 'Teste Data usando Vue JS!!'
        }
    }
}
</script>

<style>
    #app {
        background-color: chocolate;
        color: #fff;
    }
</style>
