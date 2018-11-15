<template>
    <div class="content">
        <h1>Fingerprint</h1>
        <p>This is a graphical representation of your browser fingerprint.
            Try to open this website on a different device, the ASCII image will be different.</p>
        <FPrintVis></FPrintVis>
        <a id="showMore" @click="showExplanation = !showExplanation">How does this work?</a>
        <transition name="fade">
            <article v-show="showExplanation">
                <p>
                    This site gathers information your browser provides, such as
                    operating system, screen resolution, set display language, supported fonts and many more metrics.
                    All this information is combined into a hash which should be fairly unique to your machine: Your
                    <Ref :url="refs.deviceFingerprint" :styled="true">device fingerprint</Ref>.
                </p>
                <p>
                    I then use an
                    <Ref :url="refs.drunkenBishop" :styled="true">
                        algorithm that can draw images from hashes</Ref>
                    and show the result as ASCII art.
                </p>
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
    refs: {
      deviceFingerprint: new URL('https://en.wikipedia.org/wiki/Device_fingerprint'),
      drunkenBishop: new URL('https://pthree.org/2013/05/30/openssh-keys-and-the-drunken-bishop/'),
    },
  }),
};
</script>

<style scoped>

    .content {
        text-align: center;
        max-width: 40em;
    }

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
