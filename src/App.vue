<template>
  <div id="app">
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style>
  body, html {
    background-color: black;
    font-family: "Courier New", serif;
    color: white;
  }
  #app {
    background: #121010;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
</style>
