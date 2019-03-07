<template>
  <div class="numbers">
      <el-row type="flex" class="row-bg" justify="center">
          <el-col :xs="24" :md="16" :lg="12">
            <n-card
                isBlue>
                <template v-slot:header>
                    <h4>Ticket Generator</h4>
                    <h2>{{ msg }}</h2>
                </template>
                <el-form :inline="true" ref="form" label-width="120px">
                  <el-input-number v-model="num" :min="1" :max="20" v-if="!showTickets"></el-input-number>
                  <el-button type="primary" @click="generateTicket()" v-if="!showTickets"><i class="el-icon-circle-plus-outline"></i> Generate</el-button>
                  <el-button type="primary" @click="resetTicket()" v-if="showTickets"><i class="el-icon-refresh"></i> Reset</el-button>
                </el-form>
            </n-card>
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
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="16" :lg="12">
        <p class="disclaimer"><strong>ATTENTION</strong> I am not responsible for your use of these randomly generated numbers. 
        Have a little fun, but for the love of God, I cannot guarantee success!</p>
      </el-col>
    </el-row>
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
        rand.splice(5,66);
        rand.sort((a, b) => a - b);
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
  h3{
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  .disclaimer {
    margin-top: 2rem;
    font-size: 0.675rem;
    color: #888;
    text-align: left;
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
  .ticket-box {
    text-align:left;
  }
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
