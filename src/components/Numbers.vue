<template>
  <div class="numbers">
    <el-row type="flex" class="row-bg" justify="center">
        <el-col :xs="24" :md="16" :lg="12" class="card">
          <h2>{{ msg }}</h2>
      
          <el-form :inline="true" ref="form" label-width="120px">
              <el-input-number v-model="num" :min="1" :max="10" v-if="!showTickets"></el-input-number>
              <el-button type="primary" @click="generateTicket()" v-if="!showTickets">Generate</el-button>
              <el-button type="primary" @click="resetTicket()" v-if="showTickets">Reset?</el-button>
          </el-form>
        </el-col>
    </el-row>
    <transition name="fade" mode="out-in">
      <el-row type="flex" class="row-bg" justify="center" v-if="showTickets">
        <el-col :xs="24" :md="16" :lg="12">
          <div class="ticket-box">
            <div v-for="item in tickets">
              <ul class="le-tickets">
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
      this.tickets = [];
      for (let i = 0; i < this.num; i++) {
        let mega = Math.floor((Math.random() * 25) + 1);
        let rand = this.range(1,70,1);
        this.shuffle(rand);
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
      this.msg = 'Showing ' + this.num + ' ticket(s)';
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
.numbers {
  padding-bottom: 6rem;
  .form-row {
    margin: 1rem 0;
  }
  .el-input-number,
  button {
    margin: 0 0.5rem;
  }
  .card {
    padding: 2rem;
    border-radius: 2px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  }
  .le-tickets {
    margin: 1rem 0;
    padding: 2rem 1rem;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    border-radius: 2px;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.05);
    }
    li {
      padding: 0;
      font-size: 1em;
      line-height:50px;
      width: 50px; 
      border: 1px solid #eee;
      text-align: center; 
      border-radius: 25px;

      &:last-child {
        border-color: #aaa;
      }
    }
  }
}
</style>
