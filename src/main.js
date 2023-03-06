import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getFirestore } from "firebase/firestore";

import App from './App.vue'
import router from './router'


import './assets/main.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import '@mdi/font/css/materialdesignicons.css'


const firebaseConfig = {
  apiKey: "AIzaSyC7FXw7p0Mc5AbMVSypaaBG_QTHhrUdQeE",
  authDomain: "project-498fe.firebaseapp.com",
  projectId: "project-498fe",
  storageBucket: "project-498fe.appspot.com",
  messagingSenderId: "641312718195",
  appId: "1:641312718195:web:648fb47d6bd92d1ea79906"
};

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const initfriebase = initializeApp(firebaseConfig);
export const db = getFirestore(initfriebase);

const vuetify = createVuetify({
  components,
  directives,
})

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
