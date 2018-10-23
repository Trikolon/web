<template>
    <div>
        <label>String 1
            <input type="text" v-model="str">
        </label>
        <br>
        <label>String 1 Hash
            <input type="text" readonly v-model="strHashed">
        </label>
        <br><br>
        <div class="p">
            <h2>String Image ASCII</h2>
            <pre style="border: 1px solid;">{{strImage}}</pre>
        </div>


        <div class="p">
            <h2>Fingerprint Image ASCII</h2>
            <pre style="border: 1px solid;">{{fingerprintImageAscii}}</pre>
        </div>

        <div class="p">
            <h2>Fingerprint</h2>
            <canvas ref="fpCanvas"></canvas>
        </div>
    </div>
</template>

<script>

import sha1 from 'sha1';
import Fingerprint2 from 'fingerprintjs2';

import bishop from '../bishop';
import { DrunkenBishop } from '../bishop';

export default {
  name: 'Fingerprint',
  data: () => ({
    str: 'test string',
    fingerprintHash: null,
  }),
  computed: {
    strHashed() {
      return sha1(this.str);
    },
    strImage() {
      return bishop(this.strHashed);
    },
    fingerprintImageAscii() {
      if (this.fingerprintHash == null) return '';
      return bishop(this.fingerprintHash);
    },
  },
  beforeMount() {
    this.getFingerprintHash()
      .then((hash) => {
        this.fingerprintHash = hash;

        const b = new DrunkenBishop();
        b.walk(this.fingerprintHash);

        const map = b.mapArray;
        console.debug('map array', map);

        this.drawFingerprintCanvas(this.$refs.fpCanvas, map, b.mapSize);
      });
  },
  methods: {
    getFingerprintHash() {
      return new Promise((resolve) => {
        new Fingerprint2().get((result, components) => {
          console.debug('Fingerprint hash', result); // a hash, representing your device fingerprint
          console.debug('Fingerprint values', components); // an array of FP components
          return resolve(result);
        });
      });
    },
    // TODO: move to bishop class
    drawFingerprintCanvas(canvas, map, mapSize) {
      const mapX = mapSize.X;
      const mapY = mapSize.Y;
      const canvasX = canvas.width;
      const canvasY = canvas.height;
      const ctx = canvas.getContext('2d');

      const modX = Math.floor(canvasX / mapX);
      const modY = Math.floor(canvasY / mapY);

      for (let y = 0; y < mapY; y += 1) {
        for (let x = 0; x < mapX; x += 1) {
          const i = (y * mapX) + x;
          if (map[i] !== 2) {
            console.debug('draw');
            ctx.fillRect(x * modX, y * modY, modX - 2, modY - 2);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
    .p {
        margin-bottom: 5em;
    }
</style>
