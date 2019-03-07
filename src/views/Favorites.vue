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
          <p>Will show your favorite combinations. Once the feature is available&hellip;</p>
        </n-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'favorites',
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>
