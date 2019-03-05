<template>
  <div class="numbers">
      <el-row type="flex" class="row-bg" justify="center">
          <el-col :xs="24" :md="16" :lg="12" class="card card--blue">
            <h4>Ticket Generator</h4>
            <h2>{{ msg }}</h2>
              <el-form :inline="true" ref="form" label-width="120px">
                  <el-input-number v-model="num" :min="1" :max="20"></el-input-number>
                  <el-button type="primary" @click="generateTicket()"><i class="el-icon-circle-plus-outline"></i> Generate</el-button>
                  <el-button type="primary" @click="resetTicket()"><i class="el-icon-refresh"></i> Reset</el-button>
              </el-form>
          </el-col>
      </el-row>
    <transition name="fade" mode="out-in">
      <el-row type="flex" class="row-bg" justify="center" v-if="showTickets" :key="showTickets">
        <el-col :xs="24" :md="16" :lg="12">
          <div class="ticket-box">
            <h3>Your Tickets</h3>
            <p>All randomly generated.</p>
            <div v-for="(item, index) in tickets">
              <ul class="le-tickets">
                <li class="index">{{ index+1 }}</li>
                <li>{{ item.first }}</li>
                <li>{{ item.second }}</li>
                <li>{{ item.third }}</li>
                <li>{{ item.fourth }}</li>
                <li>{{ item.fifth }}</li>
                <li>{{ item.mega }}</li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Numbers',
  data() {
    return {
      msg: 'How many tickets?',
      num: 1,
      showTickets: false,
      tickets: [],
    }
  },
  methods: {
    range(start, stop, step){
      let a=[start], b=start;
      while(b<stop){b+=(step || 1);a.push(b)}
      return a;
    },
    shuffle(arra1) {
    let ctr = arra1.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    },
    generateTicket() {
      this.showTickets = false;
      this.tickets = [];
      for (let i = 0; i < this.num; i++) {
        let mega = Math.floor((Math.random() * 25) + 1);
        let rand = this.range(1,70,1);
        this.shuffle(rand);
        let final = rand.splice(5,66);
        rand.sort();
        this.tickets.push({
          first: rand[0],
          second: rand[1],
          third: rand[2],
          fourth: rand[3],
          fifth: rand[4],
          mega: mega
        });
      }
      this.showTickets = true;
      this.msg = 'Generated ' + this.num + ' ticket(s)';
    },
    resetTicket() {
      this.msg = 'How many tickets?';
      this.showTickets = false;
      this.num = 1;
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_variables.scss';
@import '@/assets/scss/utils/_mixins.scss';

.numbers {
  padding-bottom: 6rem;
  
  h3{
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  .form-row {
    margin: 1rem 0;
  }
  .el-input-number,
  button {
    margin: 0.5rem;
    color: $dark-blueGreen;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  }
  .card {
    padding: 2rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);

    &--blue {
      background-color: $midGreen;
      background: linear-gradient(45deg, $midGreen 0%, $dark-blueGreen 100%);
      color: $darkGreen;

      h2{
        color: $white;
        margin-top: 0;
      }
      h4 {
        color: $white;
        margin-bottom: 0;
        font-size: 0.65rem;
        letter-spacing: 0.0675rem;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  .le-tickets {
    margin: 1rem 0;
    padding: 1rem 0 1rem 30px;
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

    @include min-media(768px) {
      justify-content: space-around;
      padding: 0 0 0 40px;
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
