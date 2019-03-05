<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <div class="card card--blue">
                <h4>Welcome</h4>
                <h1>What is Numbers?</h1>
                <p>Ever wanted to randomly generate tickets for Mega Millions? Now you can do it quickly and easily!</p>
            </div>
            <div class="card">
                <div class="illustrated"><i class="el-icon-view"></i></div>
                <h4>How to</h4>
                <h2>Generate tickets</h2>
                <p>Head over to the generate tab, choose the number, and tap generate. Super simple.</p>
                <router-link to="/generate" class="btn"><i class="el-icon-view"></i> Generate</router-link>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Numbers from '@/components/Numbers.vue'

export default {
  name: 'home',
  components: {
    Numbers
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/utils/_variables.scss';
.home {
    padding-bottom: 6rem;
}
.card {
    padding: 2rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);

    .illustrated {
        i {
            color: #ccc;
            font-size: 3rem;
        }
    }
    h1,
    h2 {
        margin-top: 0;
        margin-bottom: 0;
    }
    h4 {
        margin-bottom: 0;
        font-size: 0.65rem;
        letter-spacing: 0.0675rem;
        text-transform: uppercase;
        font-weight: 700;
    }
    &--blue {
        background-color: $midGreen;
        background: linear-gradient(45deg, $midGreen 0%, $dark-blueGreen 100%);
        color: $white;

        h1,
        h2,
        h4 {
            color: $white;
        }
    }
    .btn {
        display: inline-block;
        text-decoration: none;
        color: $dark-blueGreen;
        border: 2px solid $electricGreen;
        border-radius: 4px;
        padding: 12px 20px;
        line-height: 1;
    }
}
</style>
