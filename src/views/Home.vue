<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <n-card
                icon="el-icon-location-outline"
                isBlue>
                <template v-slot:header>
                    <h4>Welcome</h4>
                    <h1>What is Numbers?</h1>
                </template>
                <p>Ever wanted to randomly generate tickets for Mega Millions? Now you can do it quickly and easily!</p>
            </n-card>
            <n-card
                icon="el-icon-view"
                isLeft>
                <template v-slot:header>
                    <h4>How to</h4>
                    <h2>Generate tickets</h2>
                </template>
                <p>Head over to the generate tab, choose the number, and tap generate. Super simple.</p>
                <router-link to="/generate" class="btn">Generate</router-link>
            </n-card>
            <n-card
                icon="el-icon-news"
                isLeft>
                <template v-slot:header>
                    <h4>About</h4>
                    <h2>This Web App</h2>
                </template>
                <p>What is this thing, and why does it exist? Find out more than you wanted to know.</p>
                <router-link to="/about" class="btn">About</router-link>
            </n-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/utils/_variables.scss';
.home {
    padding-bottom: 6rem;
}
</style>
