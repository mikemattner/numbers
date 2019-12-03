<template>
  <div class="numbers">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="16" :lg="12">
        <n-card icon="el-icon-view" isBlue>
          <template v-slot:header>
            <h4>Ticket Generator</h4>
            <h2>{{ msg }}</h2>
          </template>
          <el-form :inline="true" ref="form" label-width="120px">
            <el-input-number
              v-model="num"
              :min="1"
              :max="20"
              v-if="!showTickets"
            ></el-input-number>
            <el-button
              type="primary"
              @click="generateTicket()"
              v-if="!showTickets"
              ><i class="el-icon-circle-plus-outline"></i> Generate</el-button
            >
            <el-button type="primary" @click="resetTicket()" v-if="showTickets"
              ><i class="el-icon-refresh"></i> Reset</el-button
            >
          </el-form>
        </n-card>
      </el-col>
    </el-row>
    <transition name="fade" mode="out-in">
      <el-row
        type="flex"
        class="row-bg"
        justify="center"
        v-if="showTickets"
        :key="showTickets"
      >
        <el-col :xs="24" :md="16" :lg="12">
          <div class="ticket-box">
            <h3>Your Tickets</h3>
            <p>All randomly generated.</p>
            <n-ticket
              v-for="(ticket, index) in tickets"
              :index="index + 1"
              :item="ticket"
              :key="tickets.indexOf(ticket)"
            />
          </div>
        </el-col>
      </el-row>
    </transition>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :xs="24" :md="16" :lg="12">
        <p class="disclaimer">
          <strong>ATTENTION</strong> I am not responsible for your use of these
          randomly generated numbers. Have a little fun, but for the love of
          God, I cannot guarantee success!
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Numbers",
  data() {
    return {
      msg: "How many tickets?",
      num: 1,
      showTickets: false,
      tickets: []
      // showTickets: this.$store.state.showTickets,
      // tickets: this.$store.state.tickets,
    };
  },
  methods: {
    range(start, stop, step) {
      let a = [start],
        b = start;
      while (b < stop) {
        b += step || 1;
        a.push(b);
      }
      return a;
    },
    shuffle(arra1) {
      let ctr = arra1.length,
        temp,
        index;
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
        let mega = Math.floor(Math.random() * 25 + 1);
        let rand = this.range(1, 70, 1);
        this.shuffle(rand);
        rand.splice(5, 66);
        rand.sort((a, b) => a - b);
        this.tickets.push({
          first: rand[0],
          second: rand[1],
          third: rand[2],
          fourth: rand[3],
          fifth: rand[4],
          mega: mega,
          liked: false
        });
      }
      this.showTickets = true;
      this.msg = "Generated " + this.num + " ticket(s)";
      let payload = {
        tickets: this.tickets,
        showTickets: this.showTickets
      };
      // this.setTicketState(payload);
    },
    resetTicket() {
      this.msg = "How many tickets?";
      this.showTickets = false;
      this.num = 1;
      let payload = {
        tickets: [],
        showTickets: this.showTickets
      };
      // this.setTicketState(payload);
    },
    setTicketState(payload) {
      this.$store
        .dispatch("tickets", payload)
        .then(() => {
          // console.log(payload);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";

.numbers {
  h3 {
    font-weight: 700;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  .disclaimer {
    margin-top: 2rem;
  }
  .form-row {
    margin: 1rem 0;
  }
  .el-input-number,
  button {
    margin: 0.5rem;
    color: $dark-blueGreen;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    font-size: 1rem;
    &:hover,
    &:active {
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    }
  }
  .ticket-box {
    text-align: left;
  }
}
</style>
