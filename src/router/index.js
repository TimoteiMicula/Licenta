import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
// import Crud from "../views/Crud.vue";
import Contact from "../views/Contact.vue";
import Terms from "../views/Terms.vue";
import Filenew from "../views/filenew.vue";




import firebase from 'firebase' ; 
require('firebase/auth');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/filenew",
    name: "filenew",
    component: Filenew,
    meta: { requiresAuth: true }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
    
  // {
  //   path: "/crud",
  //   name: "crud",
  //   component: Crud
  // },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// verific daca sunt autentificat. daca nu sunt, redirect catre login page.
  router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;







