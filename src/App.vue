<template>
  <div id="app">
    <el-container>
      <el-header>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/app.scss';
@import '@/assets/scss/utils/_variables.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    &.router-link-exact-active {
      color: $orange;
      font-weight: bold;
    }
  }
}
</style>
