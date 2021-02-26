import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// global register at main.js
import VueCountdownTimer from 'vuejs-countdown-timer';

import router from './router'
Vue.use(VueCountdownTimer);
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')