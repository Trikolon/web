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
        label: 'github',
        url: new URL('https://github.com/Trikolon'),
        icon: {
          name: 'github',
          group: 'fab',
        },
      },
      {
        label: 'twitter',
        url: new URL('https://twitter.com/pzuehlcke'),
        icon: {
          name: 'twitter',
          group: 'fab',
        },
      },
      {
        label: 'mastodon',
        url: new URL('https://mastodon.social/@pbz'),
        icon: {
          name: 'mastodon',
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
        label: 'projects',
        route: 'projects',
        icon: {
          name: 'list',
          group: 'fas',
        },
      },
    ],
  }),
};
</script>

<style scoped>

</style>
