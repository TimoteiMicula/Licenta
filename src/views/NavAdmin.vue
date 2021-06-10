<template>
<div>
     <div class="navbar navbar-expand-lg fixed-top navbar-light">

    <button class="navbar-toggler" type="button" data-toggle="collapse" target=".navbar-collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
 <router-link  to="/"><img class="c"  src="../assets/22logo.jpg" ></router-link>
   
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
      <ul class="navbar-nav ml-auto" >

         <li class="nav-item " >
          <router-link   class="nav-link text-light" to="/"><i class="fa fa-home " aria-hidden="true"></i> Acasa</router-link>

        </li>
        
        <li  class="nav-item">
           <router-link  class="nav-link text-light" to="/terms"><i class="fa fa-file-text-o " aria-hidden="true"></i> Termeni si conditii</router-link>
        </li>
      

        <li class="nav-item">
          <router-link  class="nav-link text-light" to="/admin">Rezervări</router-link>
        </li>

        

        <li class="nav-item">
          <router-link  class="nav-link text-light" to="/admin2">Adauga mașini</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-light" to="/contact"><i class="fa fa-id-badge" aria-hidden="true"></i> Contact</router-link>
        </li>

      </ul>
      

    </div>

     </div>




     <div class="SocialBullets">
       
    <a class="whapp" href="https://api.whatsapp.com/send/?phone=+40757383704&text=Buna%20ziua,%20as%20avea%20nevoie%20de%20mai%20multe%20detalii.%20M%C4%83%20pute%C8%9Bi%20ajuta?&app_absent=0" target="_blank"></a>
    <a class="fb" href="https://www.facebook.com/Auto-Tim-100732282165030" target="_blank"></a>
  
    </div>
    
  </div>  


</template>  
  
<script>

// import $ from 'jquery'

//   $(document).on('click', function() {
//   return $('.collapse').collapse('hide');
// });

</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
 .navbar {
        background-color:$turcoaz;
        // height: 62px;
        // opacity: 91%;
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
      // opacity: 91%;
       box-shadow: 0 0 5px rgb(95, 95, 95);
    }



  
  }


  .SocialBullets{

    width: 46px;
    position: fixed;
    right: 0;
    bottom: 50px;
    z-index: 999;


}

// @media screen and (max-width: 480px){
// .SocialBullets{
//      bottom: 50px; 
// }
// }
    .whapp{
      background-image: url("../assets/whatsapp.svg");
    // display: inline-block;
    // background-repeat: no-repeat;
    // background-size: 30px;
    // background-color: #fff;
    // width: fit-content;
    // height: 30px;
    // font-size: 17px;
    // margin-right: 10px;
    // vertical-align: middle;
    // margin-bottom: 3px;
    // border-radius: 7px;
    // text-indent: 40px;

    display: inline-block;
    background-repeat: no-repeat;
    background-size: 30px;
    width: fit-content;
    height: 30px;
    font-size: 17px;
    margin-right: 10px;
    vertical-align: middle;
    margin-bottom: 3px;
    background-color: transparent;
    border-radius: 7px;
    text-indent: 40px;



        width: 35px;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 21px;
    margin-right: 0;
    background-size: 35px;
    box-shadow: 2px 2px 3px #272727a1;
    background-color: #fff;
}

.fb{
  background-image: url("../assets/fb.svg");
    width: 35px;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 21px;
    border: 0;
    background-color: #1778f2;
    box-shadow: 2px 2px 3px #272727a1;



    // width: 35px;
    // height: 40px;
    // border: 1px solid #808080;
    display: inline-block;
    border-top-left-radius: 7px;
    border-bottom-right-radius: 7px;
    background-repeat: no-repeat;
    background-size: 13px;
    background-position: center;
    // background-color: #262b30;
    margin-right: 5px;
    background-size: 19px;
    border-radius: 20px;

}
</style>

