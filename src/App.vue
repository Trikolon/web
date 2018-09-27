<template>
  <div id="app">
    <Navigation :heading="heading" :nav-items="navItems"></Navigation>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation,
  },
  data: () => ({
    heading: 'Paul Zühlcke',
    navItems: [
      {
        label: 'keybase',
        url: new URL('https://keybase.io/pbz'),
        icon: {
          name: 'key',
          group: 'fas',
        },
      },
      {
        label: 'github',
        url: new URL('https://github.com/Trikolon'),
        icon: {
          name: 'github',
          group: 'fab',
        },
      },
      {
        label: 'twitter',
        url: new URL('https://twitter.com/deppaws'),
        icon: {
          name: 'twitter',
          group: 'fab',
        },
      },
      {
        label: 'e-mail',
        url: new URL('mailto:paul@zuehlcke.de'),
        icon: {
          name: 'envelope',
          group: 'fas',
        },
      },
    ],
  }),
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
