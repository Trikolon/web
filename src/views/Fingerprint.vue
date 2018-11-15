<template>
    <div class="content" >
        <h1>Fingerprint</h1>
        <p>This is a graphical representation of your browser fingerprint.
            Try to open this website on a different device, the ASCII image will be different.</p>
        <FPrintVis></FPrintVis>
        <a id="showMore" @click="showExplanation = !showExplanation">How does this work?</a>
        <transition name="fade">
            <div v-show="showExplanation">
        <p >

            This site gathers information your browser provides, such as
            operating system, screen resolution, set display language, supported fonts and many more metrics.
            All this information is combined into a hash which should be fairly unique to your machine: Your
            <a href="https://en.wikipedia.org/wiki/Device_fingerprint" target="_blank" rel="nofollow">device fingerprint</a>.
        </p>
            <p>
            I then use an
            <a href="https://pthree.org/2013/05/30/openssh-keys-and-the-drunken-bishop/" target="_blank" rel="nofollow">
                algorithm  that can draw images from hashes</a>
            and show the result as ASCII art.
        </p>
        </div>
        </transition>
    </div>
</template>

<script>

import FPrintVis from '../components/FPrintVis.vue';

export default {
  name: 'Fingerprint',
  components: { FPrintVis },
  data: () => ({
    showExplanation: false,
  }),
};
</script>

<style scoped>
    a {
        color: white;
    }
    .content {
        text-align: center;
        max-width: 40em;
    }
    #showMore:hover {
        cursor: pointer;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
