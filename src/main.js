import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faFirefox } from '@fortawesome/free-brands-svg-icons';
import {
  faKey, faEnvelope, faFingerprint, faList, faGamepad, faBars, faPuzzlePiece, faWifi,
} from '@fortawesome/free-solid-svg-icons';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

library.add(faGithub, faKey, faTwitter, faEnvelope, faFingerprint, faList, faGamepad, faBars,
  faFirefox, faPuzzlePiece, faWifi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
