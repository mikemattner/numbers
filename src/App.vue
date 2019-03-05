<template>
  <div id="app">
    <el-header id="nav">
      <div class="logo">
          <span>Numbers</span>
          <i class="el-icon-more"></i>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
    <footer>
      <div class="menu">
        <router-link to="/"><i class="el-icon-location-outline"></i> Home</router-link>
        <router-link to="/generate"><i class="el-icon-view"></i> Generate</router-link>
        <router-link to="/about"><i class="el-icon-news"></i> About</router-link>
      </div>
    </footer>
  </div>
</template>

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
footer {
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  height: 100px;
  border-top: 1px solid #eee;

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    text-decoration: none;
    letter-spacing: 0.065em;
    font-size: 0.75rem;
    color: #ccc;

    i {
      font-size: 2rem;
    }

    &.router-link-exact-active {
      color: $dark-blueGreen;
      font-weight: 700;
      i {
        color: $electricGreen;
      }
    }
  }
}
#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $white;
  color: $midGreen;
  font-size: 0.75rem;
  position: fixed;
  width: 100%;
  z-index: 10000;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: -0.5px;
      width: 100%;
      color: $black;

      i {
        color: $white;
        background: linear-gradient(135deg, $midGreen 0%, $dark-blueGreen 100%);
        margin-right: 0.5rem;
        font-size: 2rem;
        border-radius: 4px;
        &:before {
          display: block;
          transform: rotate(45deg);
        }
     }
    .brand-logo__image {
      width: 30px;
      height: 30px;
      margin-right: 0.5rem;
      .circle-shape {
        fill: $midGreen;
      }
      .logo-shape {
        fill: $white;
      }
    }
  }
  a {
    color: $black;
    margin: 0 1rem;
    text-decoration: none;
    letter-spacing: 0.065em;
    &.router-link-exact-active {
      color: $black;
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
