<template>
  <div>
  <br><br><br> <br><br><br>
<div class="text-center">
<h1>REZERVARE EFECTUATĂ CU SUCCES!</h1>
<h3>Urmează să fiți contactat de operatorul nostru în cel mai scurt timp!</h3>
<h4>Vă mulțumim !!!</h4>
</div>









<br><br><br><br><br><br><br><br><br><br><br><br><br><br>









         <section class="contact-area">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-4 footer">
            <div><br /></div>
            <img src="../assets/location2.png" style="" alt="" class="icons" />
            <!-- <h3>Location</h3> -->
            <address>
              <br />
              <div>Beznea nr. 60, Bihor</div>
              <div>Cod postal: 417081</div>
              <div>România</div>
            </address>
          </div>
          <div class="col-md-4">
            <div><br /></div>
            <img src="../assets/telephone.png" style="" alt="" class="icons" />
            <div class="features-caption footer">
              <!-- <h3 >Phone</h3> -->
              <br />
              <a href="tel:0741682347" class="footer">0741 682 347</a>
              <br />
              <a href="tel:0735702305" class="footer">0735 702 305</a>
            </div>
          </div>
          <div class="col-md-4">
            <div><br /></div>
            <img src="../assets/email.png" style="" class="icons" />
            <div class="features-icon">
              <!-- <img src="../assets/icon/icon3.svg" alt=""> -->
            </div>
            <div class="features-caption footer">
              <!-- <h3>Email</h3> -->
              <br />
              <a href="mailto: timote.micula@emanuel.ro" class="footer"
                >timote.micula@emanuel.ro</a
              >
              <br />
              <a href="mailto: timote.micula@emanuel.ro" class="footer"
                >Send Email</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/variables.scss";

// .clearfix {
// min-height: 1000px;
//  background: url("../assets/contact2.jpg");
// background: url("../assets/img/icon/icon1.png");
// }
// .contact2{
// min-width:700px;
// background-color: rgb(250, 245, 245);
// background-size:100%;
//  background-repeat: no-repeat;

// }

.top-buffer { 
  margin-top:30px;
  margin-right: 10px;
 }
.contact-area {
  background-color: $turcoaz;
  border-radius: 5px;
}

.titlu1 {
  color: $negru;
   margin-top:130px;
    
}
.adress{
  padding-right: -20px;
  
}

.adresa1{
   margin-top:100px;
   
}
.PDvGL {
  border-radius: 5px;
  color: $alb;
  
  display: inline-block;
  text-transform: uppercase;
  padding: 12px 20px;
  white-space: nowrap;
}

.PDvGL {
  background-color: $turcoaz;
  border-radius: 2%;
  opacity: 91%;
  box-shadow: 3px 2px 15px -2px $negru;
}

.footer {
  color: $alb;
}

.icons {
  background-color: aliceblue;
  border-radius: 50%;
  background-size: 220%;
  padding: 10px;
}

.efect{
  box-shadow: 0 2px 2px -2px $gri;
  // border-radius: 55%;
}

.section-header{
  margin-top: 80px;

}

.SocialBullets{

    width: 46px;
    position: fixed;
    right: 0;
    bottom: 150px;
    z-index: 999;

}





</style>
