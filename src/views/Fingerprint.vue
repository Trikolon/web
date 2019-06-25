<template>
    <div>
        <h1>Fingerprint</h1>
        <p>This is a graphical representation of your browser fingerprint.
            Try to open this website on a different device, the ASCII image will be different.</p>
        <FPrintVis @hash="setHash"></FPrintVis>
        <a id="showMore" @click="showExplanation = !showExplanation">How does this work?</a>
        <transition name="fade">
            <article v-show="showExplanation">
                <p>
                    This site gathers information your browser provides, such as
                    operating system, screen resolution, set display language,
                    supported fonts and many more metrics.
                    All this information is combined into a hash
                    which should be fairly unique to your machine.<br> Your
                    <Ref :url="refs.deviceFingerprint" :styled="true">device fingerprint</Ref>:
                </p>
                <code>{{hash}}</code>
                <p>
                    I then use an
                    <Ref :url="refs.drunkenBishop" :styled="true">
                        algorithm that can draw images from hashes</Ref>
                    and show the result as ASCII art.
                </p>
                <p><Ref :url="refs.github" :styled="true">Source Code</Ref></p>
            </article>
        </transition>
    </div>
</template>

<script>

import FPrintVis from '../components/FPrintVis.vue';
import Ref from '../components/Ref.vue';

export default {
  name: 'Fingerprint',
  components: { FPrintVis, Ref },
  data: () => ({
    showExplanation: false,
    hash: null,
    refs: {
      deviceFingerprint: new URL('https://en.wikipedia.org/wiki/Device_fingerprint'),
      drunkenBishop: new URL('https://pthree.org/2013/05/30/openssh-keys-and-the-drunken-bishop/'),
      github: new URL('https://github.com/Trikolon/web/blob/master/src/views/Fingerprint.vue'),
    },
  }),
  methods: {
    setHash(hash) {
      this.hash = hash;
    },
  },
};
</script>

<style scoped>

    #showMore {
        text-decoration: underline;
        color: white;
    }

    #showMore:hover {
        cursor: pointer;
    }

    /* Fade-in transition */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to     {
        opacity: 0;
    }
</style>
