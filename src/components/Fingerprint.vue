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
    </form>
</template>

<script>
/**
   * Idea: hash all browser fingerprinting metics (screen size, os type etc)
   * Concatenate hashes, hash resulting string
   * Feed into drunken bishop algorithm to generate image
   */

import sha1 from 'sha1';

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
  },
  mounted() {
  },
};
</script>

<style scoped>
#form > * {
    display: block;
    width: 100%;
}
</style>
