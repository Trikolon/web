<template>
    <Navigation :heading="heading" :nav-items="navItems"></Navigation>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  name: 'Home',
  components: { Navigation },
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
      {
        label: 'fingerprint',
        route: 'fingerprint',
        icon: {
          name: 'fingerprint',
          group: 'fas',
        },
      },
    ],
  }),
};
</script>

<style scoped>

</style>
