<template>
    <a :href="url" target="_blank" rel="noopener">
        <div class="flex-container">
            <font-awesome-icon  :icon="icon" :size="iconSize" />
            <div id="navLabel">{{label}}</div>
        </div>
    </a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
  name: 'NavItem',
  components: { FontAwesomeIcon },
  props: {
    url: {
      required: true,
      type: URL,
    },
    label: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      validator(value) {
        return typeof value === 'string'
          || (Array.isArray(value)
            && value.length === 2
            && value.every(v => typeof v === 'string'));
      },
    },
    iconSize: {
      default: '2x',
      type: String,
    },
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

    #navLabel {
        padding-top: 8px;
    }


    /* FIXME: duplicate (from Navigation.vue) */
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
