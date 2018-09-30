<template>
  <div id="app">
    <Background></Background>
    <div id="centerBox">
      <Navigation :heading="heading" :nav-items="navItems"></Navigation>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Background from './components/Background.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Background,
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
</style>
