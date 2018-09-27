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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
  }
</style>
<style scoped>
  #heading {
    margin: 1.5em;
  }
  #navigation > a {
    opacity: 0.8;
    padding: 1em;

  }
  #navigation > a:hover {
    opacity: 1;
  }
  #navigation {
    flex: 2;
  }
</style>
