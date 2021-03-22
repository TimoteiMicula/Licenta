<template>
<div class="all-body">
  
  <!-- <div class="container">
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
  </div> -->


<!-- ----------------- -->

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
              <p class="login-card-description">Sign into your account</p>
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
                  <button class="btn btn-block login-btn mb-4">Login</button>
                </form>
                <div class="error" v-if="error">{{ error.message }}</div>
               
                <p class="login-card-footer-text">Don't have an account? <a href="./register" class="text-reset">Register here</a></p>
                <nav class="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav> 
            </div>
          </div>
        </div>
      </div>
      </div>
  </main>






  </div>
  
</template>


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
              name: "admin",
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









// ------------------------------- cod initial
  // div {
  //   color: inherit;
  // }
  //  .l{
  //    text-align: center;
  //    margin-top: 80px;
  //  }
  

  // input {
  //   text-align: center;
  //   width: 400px;
  //   padding: 30px;
  //   margin: 20px;
  //   font-size: 21px;
  //   background-color:rgb(196, 196, 196);
    
  // }

  // button {
  //   text-align: center;
  //   width: 400px;
  //   height: 75px;
  //    margin: 20px;
  //   font-size: 100%;
    
  // }

  // .login-form{
  //   text-align: center;
  // }

  // .error {
  //   color: red;
  // }
</style>