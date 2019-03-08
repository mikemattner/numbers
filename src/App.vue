<template>
  <div id="app">
    <component :is="layout">
      <el-container>
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view :key="$route.fullPath"/>
          </transition>
        </el-main>
      </el-container>
    </component>
  </div>
</template>

<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
@import '@/assets/scss/utils/_variables.scss';
body {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-main {
  min-height: calc( 100vh - 60px );
  padding: 0;
  padding-top: 80px !important;
}
h1,h2,h3,h4 {
  color: $dark-blueGreen;
  line-height: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: all;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(0, -2em);
}
.simple-fade-enter-active,
.simple-fade-leave-active {
  transition-duration: 0.375s;
  transition-property: all;
  transition-timing-function: ease-in-out;
}

.simple-fade-enter,
.simple-fade-leave-active {
  opacity: 0;
}
</style>
