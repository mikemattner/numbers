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
            color: $electricGreen;
            font-size: 2.5rem;
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
            border-radius: 50%;
            background-color: #f3f3f3;
            line-height: 40px;
            height: 40px;
            width: 40px;
            text-align:center;
            margin-right: 1rem;

            i {
                font-size: 2rem;
                line-height: 40px;
                text-align:center;
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
