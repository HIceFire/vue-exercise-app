<template lang="html">
  <header id="header">
    <div class="header-normal">
      <div class="header-logo">
        <a href="#"><img src="https://www.gocd.io/assets/images/go_logo-5b5ca9e1.svg" alt=""></a>
      </div>
      <div class="icon-box">
        <i :class="iconClass" @click="changeSidebarState"></i>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  computed: {
    sideBarHasOpen () { // sidebar状态
      return this.$store.state.sideBarHasOpen
    },
    iconClass () {  // 右上角图标class
      return this.sideBarHasOpen ? 'icono-cross' : 'icono-hamburger'
    }
  },
  methods: {
    changeSidebarState () {
      this.$store.commit('setSideBar')
    }
  }
}
</script>

<style>
.header-text, .header-normal {
  width: 100%;
  z-index: 1;
  display: flex;
  position: fixed;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.48);
  justify-content: space-between;
  align-items: center;
  background-color: #333;
}

.header-normal {
  height: 66px;
  border-top: 3px solid #94399E;
  padding-left: 15px;
  padding-right: 5px;
}

.header-text {
  height: 56px;
  color: #fff;
  font-size: 18px;
}

.header-text .share {
  zoom: 0.8;
  position: relative;
  right: 10px;
}

.header-logo {
  width: 60px;
}
.icon-box i {
  zoom: 1.5;
}

.icono-hamburger {
  border-radius: 4px;
}



</style>
