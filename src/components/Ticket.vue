<template>
    <div class="ticket">
        <ul class="le-tickets">
            <li class="index">{{ index }}</li>
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
  }
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
    overflow: hidden;
    position: relative;
    height: 100px;
    border-left: 3px solid $midGreen;
    text-align: center;

    @include min-media(768px) {
      justify-content: space-around;
      padding: 0 10px 0 40px;
      border-left: 3px solid $midGreen;
    }

    &:hover {
      transform: scale(1.05);
    }
    li {
      padding: 0;
      margin: 0;
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