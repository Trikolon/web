<template>
    <div>
        <router-link v-if="route" :to="route"><slot></slot></router-link>
        <a v-if="url" :href="url" target="_blank" rel="noopener"><slot></slot></a>
    </div>
</template>

<script>
export default {
  name: 'Ref',
  props: {
    url: {
      required: false,
      type: URL,
    },
    route: {
      required: false,
      type: String,
    },
  },
  beforeMount() {
    let i = 0;
    if (this.url != null) i += 1;
    if (this.route != null) i += 1;
    if (i !== 1) {
      throw new Error('Error: Must provide either url or route');
    }
  },
};
</script>

<style scoped>
    a, a:hover {
        color: inherit;
        text-decoration: none;
        cursor: default;
    }


    a:focus {
        outline: 0;
    }
</style>
