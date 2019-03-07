<template>
    <el-header id="nav">
      <div class="logo">
          <span>Numbers</span>
          <i class="el-icon-more"></i>
      </div>
    </el-header>
</template>

<script>
export default {
  name: 'HeaderBar',
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';

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
</style>