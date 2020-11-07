<template>
<div class="project">
    <div class="icon">
        <font-awesome-icon v-if="icon" :icon="[icon.group, icon.name]" size="3x" />
    </div>
    <div class="entry">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <Ref v-if="link" :route="link.route" :url="link.url" :styled="true">{{link.label}}</Ref>
    </div>

</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Ref from './Ref.vue';

export default {
  name: 'Project',
  components: { Ref, FontAwesomeIcon },
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    link: {
      required: false,
      validator(value) {
        if (value == null) return true;
        return ((typeof value.label === 'string' && value.label.length > 0))
          && (value.url || value.route);
      },
    },
    icon: {
      required: false,
      default: () => ({
        name: 'bars',
        group: 'fas',
      }),
    },
    iconSize: {
      required: false,
    },
  },
};
</script>

<style scoped>
    /* TODO: grid for uniform wrapping */
    .project {
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .project > *{
        padding: 1em;
    }
    .icon {
        min-width: 10%;
    }
    .entry {
        width: 70%;
    }
</style>
