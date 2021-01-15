<template>
     <div class="navbar navbar-expand-lg fixed-top navbar-light">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 

    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">

         <li class="nav-item " >
          <router-link class="nav-link text-light" to="/">Acasa</router-link>

        </li>
        
        <li  class="nav-item">
           <router-link class="nav-link text-light" to="/terms">Termeni si conditii</router-link>
        </li>
      

        <li class="nav-item">
          <router-link class="nav-link text-light" to="/secret">Secret</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" to="/contact">Contact</router-link>
        </li>


      </ul>
      

    </div>
  </div>  

  

</template>  

<style lang="scss" scoped>
@import "../scss/variables.scss";
 .navbar {
        background-color:$turcoaz;
        height: 62px;
        opacity: 91%;
        box-shadow: 0 0 5px rgb(70, 70, 70);

    }

    @media screen and (max-width: 992px) {

    #navbarSupportedContent {
      margin-left: -18px;
      margin-right: -18px;
      text-align: center;
      padding: -12px;
      margin-top: 13px;
      background-color: $turcoaz;
      opacity: 91%;
       box-shadow: 0 0 5px rgb(95, 95, 95);
    }
  
  }
</style>

