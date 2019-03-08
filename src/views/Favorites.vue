<template>
  <div class="favorites">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="16" :lg="12">
        <n-card
          icon="el-icon-star-off"
          isBlue>
          <template v-slot:header>
            <h4>Your</h4>
            <h1>Favorites</h1>
          </template>
        </n-card>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
          <div class="ticket-box" v-if="favorites.length > 0">
            <h3>Your Favorites</h3>
            <p>Blasts from the past.</p>
            <n-ticket v-for="(favorite, index) in favorites"
              :index="index+1"
              :item="favorite"
              :key="favorites.indexOf(favorite)"/>
          </div>
          <div class="ticket-box" v-else>
            <h3>Add Favorites</h3>
            <p>Start adding favorites here.</p>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'favorites',
  data() {
    return {
      favorites: this.$store.state.favorites,
    }
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.favorites {
  padding-bottom: 6rem;
  h3{
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  .disclaimer {
    margin-top: 2rem;
  }
  .form-row {
    margin: 1rem 0;
  }
  .el-input-number,
  button {
    margin: 0.5rem;
    color: $dark-blueGreen;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    font-size: 1rem;
    &:hover,
    &:active {
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
  }
  .ticket-box {
    text-align:left;
  }
}
</style>