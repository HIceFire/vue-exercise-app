<template lang="html">
  <transition name="fade">
    <div id="mask" class="mask" v-if="isShow"></div>
  </transition>
</template>

<script>
export default {
  computed: {
    isShow () {
      return this.$store.state.sideBarHasOpen
    },
  },
}
</script>

<style lang="css">
.mask {
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.73);
  position: fixed;
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
