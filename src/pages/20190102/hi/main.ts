import Vue from 'vue';
import App from './page';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
