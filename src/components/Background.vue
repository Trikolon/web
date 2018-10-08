<template>
<div id="backgroundContainer">
  <transition name="preview">
    <img class="backgroundImage blur"
         :style="computedStyle"
         :src="backgroundImage.preview">
  </transition>
  <transition name="full">
    <img ref="imgFull" class="backgroundImage"
         v-show="loaded"
         :src="backgroundImage.full">
  </transition>
</div>
</template>

<script>
import berlinPreview from '../assets/berlin-preview.jpg';
import berlinFull from '../assets/berlin.jpg';
import ouluPreview from '../assets/oulu-preview.jpg';
import ouluFull from '../assets/oulu.jpg';

export default {
  name: 'Background',
  data: () => ({
    backgroundImage: {},
    loaded: false,
    imageFiles: [
      {
        full: berlinFull,
        preview: berlinPreview,
        color: '#786a5f',
      },
      {
        full: ouluFull,
        preview: ouluPreview,
        color: '#466c9a',
      },
    ],
  }),
  computed: {
    computedStyle() {
      const style = {};
      if (this.backgroundImage) {
        style['background-color'] = this.backgroundImage.color;
      }
      return style;
    },
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    },
    getRandomImage() {
      const i = this.getRandomInt(0, this.imageFiles.length - 1);
      return this.imageFiles[i];
    },
  },
  beforeMount() {
    this.backgroundImage = this.getRandomImage();
  },
  mounted() {
    this.$refs.imgFull.addEventListener('load', () => {
      this.loaded = true;
    });
  },
};
</script>

<style scoped>
.backgroundImage {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

#backgroundContainer {
  opacity: 0.25;
}

@keyframes blur {
  from {
    filter: blur(15px)
  }
  to {
    filter: blur(0px)
  }
}

@keyframes appear {
  from {
    filter: opacity(0)
  }
  to {
    filter: opacity(1)
  }
}

.blur {
  filter: blur(15px);
}

.full-enter-active {
  animation: appear 1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}
</style>
