<template>
  <v-app>
    <NavigationDrawer></NavigationDrawer>
    <AppBar></AppBar>
    <v-content>
      <Carousel></Carousel>
    </v-content>
    <VueFooter></VueFooter>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/navigationdrawer.vue'
import AppBar from './components/appbar.vue'
import Carousel from './components/carousel.vue'
import VueFooter from './components/vuefooter.vue'

export default {
  components: {
    NavigationDrawer,
    AppBar,
    Carousel,
    VueFooter
  }
}
</script>
