<template>
    <headroom>
      <header class="headerbar">
        <div class="logo">
            <span>Numbers</span>
            <i class="el-icon-more"></i>
        </div>
      </header>
    </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'
export default {
  name: 'HeaderBar',
  components: {
      headroom
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';
.headroom {

  .headerbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: $white;
    color: $midGreen;
    font-size: 0.75rem;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 10000;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    transition: all 0.25s ease-in-out;
    padding: 0 20px;

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      align-items: center;
      letter-spacing: -0.5px;
      width: 100%;
      color: $black;
      transition: all 0.25s ease-in-out;
      overflow: visible;

      i {
        color: $white;
        background: linear-gradient(135deg, $midGreen 0%, $dark-blueGreen 100%);
        font-size: 2rem;
        border-radius: 4px;
        transition: all 0.25s ease-in-out;
        display: block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        overflow: visible;
        
        &:before {
          display: block;
          transform: rotate(45deg);
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
  &--not-top {
    .headerbar {  
      height: 40px;

      .logo {
        font-size: 1rem;

        i {
          font-size: 1.25rem;
          width: 25px;
          height: 25px;
          line-height: 25px;
        }
      }
    }
  }
  &--pinned {
    .headerbar { 
      top: 0;
    }
  }
  &--unpinned {
    .headerbar { 
      top: -40px;
    }
  }
}
</style>