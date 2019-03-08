<template>
    <div class="ticket">
        <ul class="le-tickets" @dblclick="like">
            <li class="index">{{ index }}</li>
            <li class="favorite">
                <i :class="{'el-icon-star-on': this.item.liked, 'el-icon-star-off': !this.item.liked}"
                    @click="like"></i>
            </li>
            <li>{{ item.first }}</li>
            <li>{{ item.second }}</li>
            <li>{{ item.third }}</li>
            <li>{{ item.fourth }}</li>
            <li>{{ item.fifth }}</li>
            <li>{{ item.mega }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'n-ticket',
    props: {
        index: Number,
        item: Object,
    },
    data() {
        return {
            favorites: this.$store.state.favorites,
        }
    },
    methods: {
        like() {
            this.item.liked = !this.item.liked;

            if(this.item.liked) {
                this.addToFavorites();
            } else {
                this.removeFromFavorites(this.item);
            }
        },
        addToFavorites() {
            this.favorites.indexOf(this.item) === -1 ? this.favorites.push(this.item) : this.open("You've already favorited this item", "Error");
            this.saveFavorites();
        },
        removeFromFavorites(favorite) {
            this.favorites.splice(this.favorites.indexOf(favorite), 1);
            this.saveFavorites();
        },
        open(message, title) {
            this.$alert(message, title, {
              confirmButtonText: 'OK',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
        },
        saveFavorites() {
            this.$store.dispatch('saveFavorites', this.favorites)
            .then(() => {
                
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.ticket {
    .le-tickets {
        margin: 1rem 0;
        padding: 1rem 10px 1rem 30px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        border-radius: 4px;
        transition: all 0.25s ease;
        position: relative;
        height: 100px;
        border-left: 3px solid $midGreen;
        text-align: center;

        @include min-media(768px) {
          height: 130px;
          padding: 0 10px 0 40px;
          border-left: 3px solid $midGreen;
        }

        &:hover {
          transform: scale(1.05);
        }
        li {
          padding: 0;
          margin: 1rem 0 0;
          font-size: 1.25rem;
          width: 40px;
          line-height: 40px;
          text-align: center; 
          border-radius: 25px;
          background-color: $midGreen;
          color: #fff;
          font-weight: 700;

          @include min-media(768px) {
            font-size: 1rem;
            width: 50px; 
            line-height:50px;
            margin: 0 1rem;
            padding: 0;
          }

          &:last-child {
            background-color: $electricGreen;
            color: $dark-blueGreen;
          }
          &.favorite {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            right: -10px;
            top: -10px;
            border: none;
            border-radius: 50%;
            padding: 0;
            margin: 0;
            width: 30px;
            height: 30px;
            line-height: 30px;
            font-weight: 700;
            background-color: $electricGreen;
            color: $dark-blueGreen;

            @include max-media(768px) {
              background-color: transparent;
              right: -2px;
              top: -2px;
            }
          }
          &.index {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            left: 0;
            top: 0;
            bottom: 0;
            border: none;
            border-radius: 0;
            padding: 0;
            margin: 0;
            width: 30px;
            font-size: 0.75rem;
            font-weight: 700;
            background-color: $electricGreen;
            color: $dark-blueGreen;

            @include max-media(768px) {
              width: 20px;
            }
          }
        }
  }
}
</style>