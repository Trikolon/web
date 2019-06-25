<template>
  <div id="app">
    <Background></Background>
    <div id="centerBox">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Background from './components/Background.vue';

export default {
  name: 'app',
  components: {
    Background,
  },
};
</script>

<style>
  body, html {
    background-color: #121010;
    font-family: "Courier New", serif;
    color: white;
    margin: 0;
  }

  #centerBox {
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

  #centerBox > * {
    text-align: center;
    max-width: 40em;
    padding: 2em;
  }
</style>
