// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire';
import App from './App';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

Vue.use(firestorePlugin);

const firebaseConfig = {
  apiKey: 'AIzaSyDc9mxgNswSoDb8b3b-cNhitlujiB-p1uI',
  authDomain: 'vue-cart-firebase.firebaseapp.com',
  databaseURL: 'https://vue-cart-firebase.firebaseio.com',
  projectId: 'vue-cart-firebase',
  storageBucket: '',
  messagingSenderId: '517183735111',
  appId: '1:517183735111:web:3fffef91cc369c22',
};

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line
export const db = firebase.firestore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
