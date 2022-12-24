<template>
    <Ref class="ref" :url="url" :route="route" :extraRel="extraRel">
        <div class="flex-container">
            <font-awesome-icon  :icon="icon" :size="iconSize" />
            <div id="navLabel">{{label}}</div>
        </div>
    </Ref>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Ref from './Ref.vue';

export default {
  name: 'NavItem',
  components: { Ref, FontAwesomeIcon },
  props: {
    url: {
      required: false,
      type: URL,
    },
    extraRel: {
      required: false,
      type: String,
    },
    route: {
      required: false,
      type: String,
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
            && value.every((v) => typeof v === 'string'));
      },
    },
    iconSize: {
      default: '2x',
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
    #navLabel {
        padding-top: 8px;
    }
    .ref {
        opacity: 0.8;
        padding: 1em;
    }
    .ref:hover {
        opacity: 1;
    }
</style>
