<template>
  <div id="app">
    <el-header id="nav">
      <div class="logo">
        <router-link to="/">
          <svg class="brand-logo__image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
            <circle class="circle-shape" cx="256" cy="256" r="255"/>
            <path class="logo-shape" d="M415.7,90.8c-4-1.7-9-0.7-12,2.3L255.7,240.6L107.9,93.1c-3.1-3.1-7.5-4-11.5-2.3c-4,1.7-6.4,5.6-6.4,9.9v310.6
                c0,4.3,2.4,8.2,6.4,9.9c1.3,0.6,2.6,0.8,4,0.8c2.8,0,5.5-1.1,7.5-3.1l147.7-147.5l147.7,147.5c2,2,4.8,3.1,7.6,3.1
                c1.4,0,3.5-0.3,4.8-0.8c4-1.7,7.3-5.6,7.3-9.9V100.7C423,96.4,419.7,92.5,415.7,90.8z M113,385.5V126.5L242.7,256L113,385.5z
                 M400,385.5L270.3,256L400,126.5V385.5z"/>
          </svg>
          Numbers
        </router-link>
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
        <router-link to="/"><i class="el-icon-circle-plus"></i> Generate</router-link>
        <router-link to="/about"><i class="el-icon-info"></i> About</router-link>
      </div>
    </footer>
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
  padding-top: 80px !important;
}
h1,h2,h3 {
  color: $black;
}
footer {
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
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
    color: #aaa;

    i {
      font-size: 2rem;
    }

    &.router-link-exact-active {
      color: $midGreen;
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
    font-weight: 900;
    font-family: 'Pacifico', cursive;
     a {
      display: flex;
      justify-content: center;
      align-items: center;
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
