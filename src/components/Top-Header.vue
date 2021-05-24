<template>
  <div class="col">
    <!-- Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div> -->
    <button class="but btn" @click="signOut">Sign out</button>
  </div>
</template>

<script>
import firebase from 'firebase' ; 
require('firebase/auth');
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
div {
  color: red;
}
.but{
background-color:$turcoaz;
    
    margin-top: 7px;
     min-width: 210px;
    color: $alb;
     border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

}
</style>