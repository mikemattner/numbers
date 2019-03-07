<template>
  <div class="header-layout">
    <HeaderBar />
    <slot />
    <MenuBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import MenuBar from '@/components/MenuBar.vue';

export default {
  components: {
    HeaderBar,
    MenuBar,
  },
};
</script>

<style lang="scss">

</style>