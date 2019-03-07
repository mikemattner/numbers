<template>
    <div class="card" v-bind:class="{ 'card--left': isLeft, 'card--blue': isBlue }">
        <div class="card--header">
            <div class="illustrated" v-if="icon"><i :class="icon"></i></div>
            <div class="headline">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="card--body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'n-card',
  props: {
    icon: String,
    isLeft: Boolean,
    isBlue: Boolean,
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';

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

        .card--header {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            h4 {
                margin-top: 0;
            }

            .illustrated {
                border-radius: 50%;
                background-color: $electricGreen;
                line-height: 45px;
                height: 45px;
                width: 45px;
                text-align:center;
                margin: 0 1rem 0 0;

                i {
                    font-size: 1.75rem;
                    line-height: 45px;
                    text-align:center;
                    color: $dark-blueGreen;
                }
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