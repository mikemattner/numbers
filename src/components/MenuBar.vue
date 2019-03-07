<template>
    <footer>
      <div class="menu">
        <router-link to="/"><i class="el-icon-location-outline"></i> Home</router-link>
        <router-link to="/generate"><i class="el-icon-view"></i> Generate</router-link>
        <router-link to="/favorites"><i class="el-icon-star-off"></i> Favorites</router-link>
        <router-link to="/about"><i class="el-icon-news"></i> About</router-link>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'MenuBar',
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';

footer {
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  height: 80px;
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
    margin: 0 1rem;
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
</style>