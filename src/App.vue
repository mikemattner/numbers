<template>
  <div id="app">
    <el-header id="nav">
          <div class="logo">Numbers</div>
    </el-header>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
    <el-footer>
      <div class="menu">
        <router-link to="/">Generate</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </el-footer>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/app.scss';
@import '@/assets/scss/utils/_variables.scss';
@import url('https://fonts.googleapis.com/css?family=Pacifico');
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
  padding-top: 60px !important;
}
h1,h2,h3 {
  color: $darkBlue;
}
.el-footer {
  background-color: $darkBlue;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  color: $white;
  a {
    color: $white;
    margin: 0 1rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.065em;
    &.router-link-exact-active {
      font-weight: 900;
    }
  }
}
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $darkBlue;
  color: $white;
  font-size: 0.75rem;
  position: fixed;
  width: 100%;
  z-index: 10000;

  .logo {
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Pacifico', cursive;
  }
  a {
    color: $white;
    margin: 0 1rem;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.065em;
    &.router-link-exact-active {
      font-weight: 900;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.375s;
  transition-property: all;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translate(0, -2em);
}
</style>
