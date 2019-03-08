<template>
  <div class="header-layout">
    <SectionHeader :key="$route.fullPath" />
    <slot />
    <MenuBar />
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue';
import MenuBar from '@/components/MenuBar.vue';

export default {
  components: {
    SectionHeader,
    MenuBar,
  },
};
</script>

<style lang="scss">

</style>