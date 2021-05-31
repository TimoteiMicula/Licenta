
<template>
  <div id="app">
    <navbar></navbar>
    
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
       
    
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