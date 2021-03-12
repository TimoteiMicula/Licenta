<template>
  <div class="all zone1">
    <section
      id="contact-form"
      class="section appear clearfix contact-form img-home"
    >
      <div class="container">
        <br /><br /><br /><br />
        
         <div class="row">
        <div class="col-md-6 ">
          <div class="cform" id="contact-form">
            <!-- <div class="col">
              <div class="row inp1">
                <input v-model="name" type="text" placeholder="Name" />
              </div>
            </div>
             <div class="col">
              <div class="row inp1">
                <input v-model="name" type="text" placeholder="Name" />
              </div>
            </div> -->
             <div class="col">
              <div class="row inp1">
                <input v-model="client.name" type="text" placeholder="Name" />
              </div>
            </div>
            <div class="col">
              <div class="row inp2">
                <input v-model="client.email" type="text" placeholder="Email" />
              </div>
            </div>
            
            <!-- <div class="col">
              <div class="row inp3">
                <input v-model="tel2" type="text" placeholder="Numar telefon" />
              </div>
            </div> -->
            <div class="col">
              <div class="row inp3">
                <input v-model="client.tel" type="text" placeholder="Numar telefon" />
              </div>
            </div>
            
            <div class="col">
              <div class="row inp4">
                <input v-model="client.date1" type="date" placeholder="De la:" />
              </div>
            </div>

            <div class="col">
              <div class="row inp4">
                <input v-model="client.date2" type="date" placeholder="Pana la:" />
              </div>
            </div>

            <button
              class="btn bg-light px-4 "
              type="button"
              @click="addreservation()"
            ><a href="http://localhost:8080/secret">click here</a></button>
          </div>
           
       
        </div>
      </div>






      </div>
    </section>

     <!-- <div class=" row cars "> 
    <div class="  car"><img src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2635/" alt=""> 
     <div class="price">De la <br><strong> 14</strong><br>Euro/zi</div> 
    <div class="descr">
<p>FORD FIESTA 1.5 DIESEL 2014</p>
<a href="/ro/fiesta-1-5/">Detalii</a></div> 
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
     </div> -->

<!-- <div class="containre">

 <div class="row car-center">
<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> 

<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>


<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>



<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>



<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>



<div class="card" style="width: 30rem;">
  <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>





</div>
</div> -->


<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
 
 <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>




<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>





<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://my.cloudcentric.biz/r/?c=1&amp;r=18&amp;i=2734/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>







  </div>
</template>

<script>
import firebase from "firebase";
  require("firebase/auth");
export default {
  name: 'Crud',
  data() {
    return {
      client:{
      name: null,
      email: null,
      tel: null,
      date1: null,
      date2: null,
      
      reservations: {},
      editForm: []
      },

    }
  },
  methods:{
    //add in firebase
    addreservation(){
      firebase.database().ref('reservations').push({client: this.client})
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
      ;
      
    },
    
    
    editreservation(key){
      firebase.database().ref('reservations/'+ key).set({
        name:this.editForm[key]
      });
      this.editForm=[]
    }
  },
  created(){
    //show data of firebase
    firebase.database().ref('reservations').on('value',(snapshot)=>{
      //  console.log(snapshot.val());
      this.reservations=snapshot.val();
    });
  }
}
</script>

<style  lang="scss" scoped>
@import "../scss/variables.scss";

.car-center{
  text-align: center;
}



//  .zone1{

//     // margin-top: 60px;
//  }

// .top{
//   margin-top: 0px;
// }
/* .w{
@media screen and (max-width: 994px)
    width: 90%;
    margin: 0 auto;

} */

.img-home {
  background-image: url("../assets/home-r.jpg");
  height: 800px;
}

// #contact-form input[type="text"] {
//   height: 60px;
//   width: 500x;
//   margin-bottom: 30px;
// margin-top: 100px;;
// }

.contact-form input,
.contactForm textarea {
  background: rgb(209, 209, 209);
  font-family: "Open Sans", sans serif;
  border: 0;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  height: 40px;
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

.cform input,
.inp {
  width: 75%;
  background: $alb;
  font-family: $font;
  border: 0;
  font-size: 14px;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  border-radius: 12em;
}

.btn {
  margin-bottom: 60px;
}
</style>
