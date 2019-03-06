<template>
  <div class="home">
    <Numbers />
  </div>
</template>

<script>
import Numbers from '@/components/Numbers.vue'

export default {
  name: 'home',
  components: {
    Numbers
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>
