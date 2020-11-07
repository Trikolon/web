<template>
  <div id="navigation" class="flex-container">
    <div v-if="heading" id="heading">
      {{heading}}
    </div>
    <template v-for="(item, index) in navItems">
      <NavItem
              :key="index"
              :label="item.label"
              :icon="[item.icon.group, item.icon.name]"
              :route="item.route"
              :url="item.url" >
      </NavItem>
    </template>

  </div>
</template>

<script>
import NavItem from './NavItem.vue';

export default {
  name: 'Navigation',
  components: { NavItem },
  props: {
    heading: {
      type: String,
    },
    navItems: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style scoped>
  .flex-container, * >>> .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
  }
  #heading {
    margin: 1.5em;
  }
  #navigation {
    flex: 2;
  }
</style>
