<template>
<div class="all zone1">
   <section id="contact-form" class="section appear clearfix contact-form img-home  " >
    <div class="container">

  <form >
    <br><br><br><br><br>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
    </div>
  </div>
  <div class="form-group row">
    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
  </div>

  <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
</form>
    
    
    
    
            <!-- <form action="" method="post" class="contactForm">

              <div class="field your-name form-group top">
                <br><br><br><br><br>
                <input type="text" name="name" placeholder="Your Name" class="cform-text" size="40" data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars">
                <div class="validation"></div>
              </div>
              <div class="field your-email form-group">
                <input type="text" name="email" placeholder="Your Email" class="cform-text" size="40" data-rule="email"
                  data-msg="Please enter a valid email">
                <div class="validation"></div>
              </div>
              <div class="field subject form-group">
                <input type="text" name="subject" placeholder="Subject" class="cform-text" size="40"
                  data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject">
                <div class="validation"></div>
              </div>

              <div class="field message form-group">
                <textarea name="message" class="cform-textarea" cols="40" rows="10" data-rule="required"
                  data-msg="Please write something for us"></textarea>
                <div class="validation"></div>
              </div>

              <div class="send-btn">
                <input type="submit" value="SEND MESSAGE" style="border-radius: 19px;" class="btn btn-theme">
              </div>

            </form> -->
        
        
        
     

    </div>
  </section>

  <div class=" row cars ">
<div class="  car"><img src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2635/" alt="">
<div class="price">De la <br><strong> 14</strong><br>Euro/zi</div>
<div class="descr">
<p>FORD FIESTA 1.5 DIESEL 2014</p>
<a href="/ro/fiesta-1-5/">Detalii</a></div>
</div>
<div class="car"><img src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2614/" alt="">
<div class="price">De la <br><strong> 18</strong><br>Euro/zi</div>
<div class="descr">
<p>FORD FOCUS CARAVAN 1.5 DIESEL 2016</p>
<a href="/ro/focus-caravan-1-5/">Detalii</a></div>
</div>
<div class="  car"><img src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="">
<div class="price">De la <br><strong> 36</strong><br>Euro/zi</div>
<div class="descr">
<p>VOLKSWAGEN PASSAT 2.0 DIESEL AUTOMAT 2016</p>
<a href="/ro/volkswagen-passat-2-0-diesel-automat-2016/">Detalii</a></div>
</div>

<div class="car"><img src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="">
<div class="price">De la <br><strong> 36</strong><br>Euro/zi</div>
<div class="descr">
<p>VOLKSWAGEN PASSAT 2.0 DIESEL AUTOMAT 2016</p>
<a href="/ro/volkswagen-passat-2-0-diesel-automat-2016/">Detalii</a></div>
</div>
</div>
</div>
  
</template>

<style  lang="scss" scoped>
@import "../scss/variables.scss";

 .zone1{
   
    // margin-top: 60px;
 }

// .top{
//   margin-top: 0px;
// }
/* .w{
@media screen and (max-width: 994px)
    width: 90%;
    margin: 0 auto;

} */

.img-home{
   background-image: url("../assets/home-r.jpg");
     height: 800px;
}

#contact-form input[type="text"] {
    height: 60px;
    width: 500x;
    margin-bottom: 30px;
    // margin-top: 100px;;
}

.contact-form input[type="text"],
.contactForm textarea {
  
    background:
        rgb(209, 209, 209);
    font-family: 'Open Sans', sans serif;
    border: 0;
    font-size: 14px;
    text-align: left;
    vertical-align: middle;
    padding: 0 10px;
    height: 60px;
    margin-bottom: 30px;
    
    border-radius: 10px;
}

.car .descr {
    background: $turcoaz;
    font-size: 20px;
    padding: 15px 2% 10px;
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    float: left;
     width: 100%;
}


</style>
