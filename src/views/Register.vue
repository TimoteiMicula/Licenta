<template>
  <div>
    <br>
    <br>
    <br>
    <top-header></top-header>
    <!-- <div class="error" v-if="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form> -->
    <main class="d-flex align-items-center min-vh-100 py-3 py-md-0 main">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img src="../assets/home-t.jpg" alt="login" class="login-card-img">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div class="brand-wrapper">
                <img src="../assets/LogoFFF.jpg" alt="logo" class="logo">
              </div>
              <p class="login-card-description">Inregistrare cont</p>
              <form @submit.prevent="pressed"  >
                  <div class="form-group " >
                    <label  for="email" class="sr-only">Email</label>
                    <input  v-model="email" type="email" name="email" id="email" class="form-control" placeholder="Email address">
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input  v-model="password" type="password" name="password" id="password" class="form-control" placeholder="***********">
                  </div>
                  <!-- <input  name="login" id="login"  type="button" value="Login"> -->
                  <button class="btn btn-block login-btn mb-4">Adaugare cont administrator</button>
                </form>
                <div class="error" v-if="error">{{ error.message }}</div>
               
                
            </div>
          </div>
        </div>
      </div>
      </div>
  </main>
  </div>
</template>

<script>
// import * as firebase from "firebase/app";
// import "firebase/auth";
import firebase from 'firebase' ; 
import TopHeader from '../components/Top-Header.vue';
require('firebase/auth');
export default {
  components: { "top-header": TopHeader },
  data() {

       return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("Inregistrat cu succes!");
          this.$router.replace({ name: "login" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";


.main{
 
 font-family: "Karla", sans-serif;
    // background-color: $turcoaz;
    min-height: 100vh;
}

// scss
.all-body {
    font-family: "Karla", sans-serif;
    background-color: rgb(235, 235, 240);
    min-height: 100vh;
}

.brand-wrapper {
    margin-bottom: 19px;

    .logo {
        height: 70px;
    }
}

.login-card {
    border: 0;
    border-radius: 27.5px;
    box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
    overflow: hidden;


    &-img {
        border-radius: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card-body {
        padding: 45px 60px 20px;
        // margin-top: 80px;

        @media (max-width: 422px) {
            padding: 55px 24px;
        }
    }

    &-description {
        font-size: 25px;
        color: #000;
        font-weight: normal;
        margin-bottom: 23px;
    }

    form {
        max-width: 326px;
    }

    .form-control {
        border: 1px solid #d5dae2;
        padding: 15px 25px;
        margin-bottom: 20px;
        min-height: 45px;
        font-size: 13px;
        line-height: 15;
        font-weight: normal;

        &::placeholder {
            color: #919aa3;
        }
    }

    .login-btn {
        padding: 13px 20px 12px;
        background-color:$turcoaz;
        border-radius: 4px;
        font-size: 17px;
        font-weight: bold;
        line-height: 20px;
        color: #fff;
        margin-bottom: 24px;

        &:hover {
            border: 1px solid #000;
            background-color: transparent;
            color: #000;
        }
    }

    .forgot-password-link {
        font-size: 14px;
        color: #919aa3;
        margin-bottom: 12px;
    }

    &-footer-text {
        font-size: 16px;
        color: $turcoaz;
        margin-bottom: 60px;

        @media (max-width: 767px) {
            margin-bottom: 24px;
        }
    }

    &-footer-nav {
        a {
            font-size: 14px;
            color: #919aa3;
        }
    }
}
</style>