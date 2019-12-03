<template>
  <div class="generate">
    <Numbers />
  </div>
</template>

<script>
import Numbers from '@/components/Numbers.vue'

export default {
  name: 'generate',
  components: {
    Numbers
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  }
}
</script>
