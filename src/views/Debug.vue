<template>

</template>

<script>
    import { DrunkenBishop } from '../bishop';
    import sha1 from 'sha1';

export default {
  name: 'Debug',
  mounted() {
    const bishop = new DrunkenBishop();
    const hash = sha1('Test str');
    bishop.walk(hash);
    const mapArray = bishop.mapArray;
    const mapString = bishop.mapString;
    console.debug('Generated map', mapArray);
    console.debug('Generated string');
    console.debug(mapString);
  },
};
</script>

<style scoped>

</style>
