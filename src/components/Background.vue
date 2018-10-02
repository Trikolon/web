<template>
    <div id="backgroundContainer">
        <transition name="preview">
            <img class="backgroundImage blur"
                 v-show="!loaded"
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
      },
      {
        full: ouluFull,
        preview: ouluPreview,
      },
    ],
  }),
  computed: {
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
      // FIXME: Artificial debug delay
      setTimeout(() => {
        console.log('Full image loaded');
        this.loaded = true;
      }, 1000);
    });
  },
};
</script>

<style scoped>
    .backgroundImage {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        opacity: .25;
    }

    @keyframes blur {
        from { filter: blur(15px)}
        to {filter: blur(0px)}
    }

    .blur {
        filter: blur(15px);
    }

    .full-enter-active {
        animation: blur 1s;
    }

</style>
