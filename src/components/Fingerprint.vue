<template>
    <form id="form">
        <label>String 1
        <input type="text" v-model="str">
        </label>
        <input type="text" readonly v-model="strHashed">

        <label>String 2
        <input type="text" v-model="str2">
        </label>
        <input type="text" readonly v-model="str2Hashed">
        <br>
        <label> String 1 + 2 hashed</label>
        <input type="text" readonly v-model="strTotalHashed">
        <br><br>
        <label> Ascii Image
        <pre>{{strImage}}</pre>
        </label>
    </form>
</template>

<script>
/**
   * Idea: hash all browser fingerprinting metics (screen size, os type etc)
   * Concatenate hashes, hash resulting string
   * Feed into drunken bishop algorithm to generate image
   */

import sha1 from 'sha1';

import bishop from '../bishop';

export default {
  name: 'Fingerprint',
  data: () => ({
    str: 'test string',
    str2: 'test string 2',
  }),
  computed: {
    strHashed() {
      return sha1(this.str);
    },
    str2Hashed() {
      return sha1(this.str2);
    },
    strTotalHashed() {
      return sha1(this.strHashed + this.str2Hashed);
    },
    strImage() {
      return bishop(this.strTotalHashed);
    },
  },
  methods: {
    hex2bin(hex) {
      return (parseInt(hex, 16).toString(2)).padStart(8, '0');
    },
  },
  mounted() {
    const hash = sha1(this.str);
    console.log('str1 hash', hash);
    const binaryHash = this.hex2bin(hash);
    console.log('str1 binary hash', binaryHash);
  },
};
</script>

<style scoped>
#form > * {
    display: block;
    width: 100%;
}
</style>
