<template>
  <div id="app">
    <v-header></v-header>
    <div id="container">
      <v-sidebar></v-sidebar>
      <v-mask></v-mask>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import sidebar from './components/sidebar.vue'
import mask from './components/mask.vue'


export default {
  name: 'app',
  // router: router,
  components: {
    'v-header': header,
    'v-sidebar': sidebar,
    'v-mask': mask,
  }
}

</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  font-family: 'Open Sans', sans-serif;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#container {
  position: relative;
  margin-top: 66px;
  height: 100%;
}
</style>
