<template>
    <div v-bind:class="{ ref: true, noStyle: !styled }">
        <router-link v-if="route" :to="route"><slot></slot></router-link>
        <a v-if="url" :href="url" target="_blank" rel="noopener">
            <slot></slot>
        </a>
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
    styled: {
      required: false,
      default: false,
      type: Boolean,
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
    .ref {
        display: inline;
    }

    a {
        color: inherit;
    }

    .noStyle a, .noStyle a:hover, .noStyle a:visited {
    /*.noStyle * {*/

        text-decoration: none;
        cursor: default;
    }

    .noStyle a:focus {
    /*.noStyle * {*/
        outline: 0;
    }
</style>
