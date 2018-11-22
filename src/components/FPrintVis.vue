<template>
    <pre>{{strImage}}</pre>
</template>

<script>
import bishop from '@/bishop';
import Fingerprint2 from 'fingerprintjs2';

export default {
  name: 'FPrintVis',
  data: () => ({
    fpHash: null,
  }),
  computed: {
    strImage() {
      if (this.fpHash == null) return 'Loading ...';
      return bishop(this.fpHash);
    },
  },
  beforeMount() {
    this.getFingerprintHash()
      .then((hash) => {
        this.fpHash = hash;
        this.$emit('hash', hash);
        this.$emit('ready');
      });
  },
  methods: {
    getFingerprintHash() {
      return new Promise((resolve) => {
        Fingerprint2.getPromise()
          .then((components) => {
            const values = components.map(comp => comp.value);
            const hash = Fingerprint2.x64hash128(values.join(''));
            console.debug('Fingerprint values', components); // an array of FP components
            console.debug('Fingerprint hash', hash); // a hash, representing your device fingerprint
            resolve(hash);
          });
      });
    },
  },
};
</script>

<style scoped>

</style>
