<template>
  <div id="app">
    <navbar></navbar>

    <!-- <top-header></top-header> -->



    <!-- <div><br><br><br><br></div> -->
  
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/register">Register</router-link> |
       <router-link to="/login">Login</router-link> |
        <router-link to="/secret">Secret</router-link> |
        <router-link to="/crud">Crud</router-link> |
        <router-link to="/terms">Termeni de inchiriere</router-link> | -->
       
    
    <router-view/> 
  </div>
</template>
 <script type="text/javascript" src="/js/chunk-vendors.js"></script>
      <script type="text/javascript" src="/js/app.js"></script>
<script>
import TopHeader from "./components/Top-Header"
import Nav from "./components/Nav"
require('bootstrap');
export default {
  components: {'top-header': TopHeader,
                'navbar': Nav}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>