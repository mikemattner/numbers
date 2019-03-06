<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12">
            <div class="card card--blue">
                <div class="illustrated"><i class="el-icon-location-outline"></i></div>
                <h4>Welcome</h4>
                <h1>What is Numbers?</h1>
                <p>Ever wanted to randomly generate tickets for Mega Millions? Now you can do it quickly and easily!</p>
            </div>
            <div class="card card--left">
                <div class="card--header">
                    <div class="illustrated"><i class="el-icon-view"></i></div>
                    <div class="headline">
                        <h4>How to</h4>
                        <h2>Generate tickets</h2>
                    </div>
                </div>
                <p>Head over to the generate tab, choose the number, and tap generate. Super simple.</p>
                <router-link to="/generate" class="btn">Generate</router-link>
            </div>
            <div class="card card--left">
                <div class="card--header">
                    <div class="illustrated"><i class="el-icon-news"></i></div>
                    <div class="headline">
                        <h4>About</h4>
                        <h2>This Web App</h2>
                    </div>
                </div>
                <p>What is this thing, and why does it exist? Find out more than you wanted to know.</p>
                <router-link to="/about" class="btn">About</router-link>
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
    text-align: center;
    
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
        background: linear-gradient(135deg, $midGreen 0%, $dark-blueGreen 100%);
        color: $white;

        h1,
        h2,
        h4 {
            color: $white;
        }
        .illustrated {
            i {
                color: $white;
                font-size: 2.5rem;
            }
        }
    }
    .illustrated {
            border-radius: 30px;
            background-color: $electricGreen;
            line-height: 60px;
            height: 60px;
            width: 60px;
            text-align:center;
            margin: 0 auto;

            i {
                line-height: 60px;
                text-align:center;
                color: $dark-blueGreen;
                font-size: 2.5rem;
            }
        }
    &--left {
        text-align: left;
    }
    &--header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h4 {
            margin-top: 0;
        }

        .illustrated {
            border-radius: 20px;
            background-color: $electricGreen;
            line-height: 40px;
            height: 40px;
            width: 40px;
            text-align:center;
            margin: 0 1rem 0 0;

            i {
                font-size: 2rem;
                line-height: 40px;
                text-align:center;
                color: $dark-blueGreen;
            }
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
