import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)
// import filenew from "./views/filenew.vue";
// import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)
// import VueFire from 'vuefire';

// Vue.use(VueFire);



// window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// const firebaseConfig = {
//   apiKey: "AIzaSyAygaSZ3mDp8IxLDt9dKXW3H0xpJdxRjvs",
//   authDomain: "crud-78ffe.firebaseapp.com",
//   databaseURL: "https://crud-78ffe.firebaseio.com",
//   projectId: "crud-78ffe",
//   storageBucket: "crud-78ffe.appspot.com",
//   messagingSenderId: "834322012186",
//   appId: "1:834322012186:web:13ce05bf419a2fbad159a3",
//   measurementId: "G-C3CFRCYD75"
// };

var firebaseConfig = {
  apiKey: "AIzaSyAPnyRoD-hljUr204YUwWEBSVZWC7YFFr4",
  authDomain: "auto-tim18.firebaseapp.com",
  databaseURL: "https://auto-tim18-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "auto-tim18",
  storageBucket: "auto-tim18.appspot.com",
  messagingSenderId: "494608257303",
  appId: "1:494608257303:web:d46712ff4571c5d6302752"
};

firebase.initializeApp(firebaseConfig);

window.firebase=firebase;

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      
      
      
      render: h => h(App)
    }).$mount("#app");
  }
});


// export const db = app.database();
// export const namesRef = db.ref('names');