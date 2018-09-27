<template>
  <div id="navigation" class="flex-container">
    <div id="heading">
      Paul Zühlcke
    </div>
    <a href="//keybase.io/pbz" target="_blank" rel="noopener">
      <div class="flex-container">
        <font-awesome-icon  icon="key" size="2x" />
        <div class="navLabel">keybase</div>
      </div>
    </a>
    <a href="//github.com/trikolon" target="_blank" rel="noopener">
      <div class="flex-container">
        <font-awesome-icon  :icon="['fab', 'github']" size="2x" />
        <div class="navLabel">github</div>
      </div>
    </a>
    <a href="//twitter.com/deppaws" target="_blank" rel="noopener">
      <div class="flex-container">
        <font-awesome-icon  :icon="['fab', 'twitter']" size="2x" />
        <div class="navLabel">twitter</div>
      </div>
    </a>
    <a href="mailto:paul@zuehlcke.de">
      <div class="flex-container">
        <font-awesome-icon  icon="envelope" size="2x" />
        <div class="navLabel">e-mail</div>
      </div>
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
  name: 'Navigation',
  components: { FontAwesomeIcon },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a, a:hover {
    color: inherit;
    text-decoration: none;
    cursor: default;
  }

  a:focus {
    outline: 0;
  }


  .flex-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
  }

  #heading {
    margin: 1.5em;
  }

  #navigation > a {
    opacity: 0.8;
    padding: 1em;

  }

  #navigation > a:hover {
    opacity: 1;
  }

  #navigation {
    flex: 2;
  }

  .navLabel {
    padding-top: 8px;
  }
</style>
