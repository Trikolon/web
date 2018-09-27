import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Vue from 'vue';
import App from './App.vue';

library.add(faGithub, faKey, faTwitter, faEnvelope);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
