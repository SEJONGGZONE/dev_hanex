import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from '@/router';
app.use(router);

// main app css
import '@/assets/css/app.css';
import 'vue-swipe-actions/dist/vue-swipe-actions.css';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
app.use(PerfectScrollbar);

//vue-meta
import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

// set default settings
import appSetting from '@/app-setting';
appSetting.init();

//vue-i18n
import i18n from '@/i18n';
app.use(i18n);

// popper
import Popper from 'vue3-popper';
app.component('Popper', Popper);


import Vue3Geolocation from 'vue3-geolocation';
app.use(Vue3Geolocation);

import VueCameraLib from 'vue-camera-lib'
app.use(VueCameraLib)


import { VueSignaturePad } from "vue-signature-pad"; // 참조사이트 : https://www.npmjs.com/package/vue-signature-pad
app.component("VueSignaturePad", VueSignaturePad);

app.mount('#app');
