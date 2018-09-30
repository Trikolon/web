<template>
    <div id="backgroundContainer">
        <transition name="fade" appear>
        <img v-if="backgroundImage" id="backgroundImage" :src="backgroundImage">
        </transition>
    </div>
</template>

<script>


export default {
  name: 'Background',
  data: () => ({
    backgroundImage: null,
    imageFiles: [
      import('../assets/berlin.jpg'),
      import('../assets/oulu.jpg'),
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
    this.getRandomImage()
      .then((img) => {
        this.backgroundImage = img.default;
      });
  },
};
</script>

<style scoped>
    #backgroundImage {
        display: block;
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        opacity: .25;
    }
    @keyframes fadein {
        from { opacity: 0; }
        to { opacity: .25 }
    }
    .fade-enter-active, .fade-leave-active {
        animation: fadein 2s;
        animation-fill-mode: forwards;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
