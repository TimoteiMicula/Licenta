<template>
  <div class="container">
     <h3 class="l">Login</h3>
    <div class="row">
      
      <div class="col">
   
    <form class="login-form" @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <div>
      <button >Login</button>
    </div>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
  </div>
  </div>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-app.js"></script>

<script>
  import firebase from "firebase";
  require("firebase/auth");
  // import bootstrap from "bootstrap";
  // require("bootstrap");
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: "",
      };
    },
    methods: {
      pressed() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            console.log(data);
            this.$router.replace({
              name: "secret"
            });
          })
          .catch((error) => {
            this.error = error;
          });
      },
    },
  };
</script>

<style lang="scss" scoped>
  div {
    color: inherit;
  }
   .l{
     text-align: center;
     margin-top: 80px;
   }
  

  input {
    text-align: center;
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
    
  }

  button {
    text-align: center;
    width: 400px;
    height: 75px;
     margin: 20px;
    font-size: 100%;
    
  }

  .login-form{
    text-align: center;
  }

  .error {
    color: red;
  }
</style>