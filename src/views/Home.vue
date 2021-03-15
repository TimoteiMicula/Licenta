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

     

<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="https://frankfurt.apollo.olxcdn.com/v1/files/dnr86ufcc7ii2-RO/image;s=1000x700" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button> -->

<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->  

<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      
      
        <div class="col">
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
           <select v-model="client.car" id="car">
  <option value="0"></option>
  <option  value="SKODA FABIA 1.2  GASOLINE 2003">SKODA FABIA 1.2  GASOLINE 2003</option>
  <option value="2">FORD FOCUS 1.6 DIESEL 2007</option>
  <option value="3">SEAT LEON 1.9 DIESEL 2008</option>
  <option value="4">FORD FIESTA 1.5 DIESEL 2014</option>
  <option value="5">HYUNDAI I30 1.4 GASOLINE 2013</option>
  <option value="6">VOLKSWAGEN PASSAT 2.0 DIESEL 2008</option>
  <option value="7">FORD FOCUS CARAVAN 1.5 DIESEL 2016</option>
  <option value="8">OPEL ZAFIRA TOURER 2.0 DIESEL 2015, 7 seats</option>
  <option value="9">SKODA SUPERB 2.0 DIESEL AUTOMATIC 2011</option>
  <option value="10">FORD GRAND C MAX 2016 DIESEL</option>
  <option value="11">OPEL ASTRA SPORTS 2.0 DIESEL AUTOMATIC 2015</option>
  <option value="12">DACIA DUSTER  1.5  DIESEL 2013</option>
  <option value="13">AUDI A4 2.0 DIESEL 2011</option>
  <option value="AUDI A6 2.0 DIESEL 2010">AUDI A6 2.0 DIESEL 2010</option>
  <option value="15">VOLKSWAGEN PASSAT AUTOMATIC 2013</option>
  <option value="16">VOLKSWAGEN PASSAT 2.0 DIESEL AUTOMAT 2016</option>
<option value="17">Opel Insignia 2014 Limousine</option>
<option value="18">Opel Vivaro 8+1 2009</option>
</select>
       
        </div>
      
    </div>
  </div>
</div>









      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div> -->
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://frankfurt.apollo.olxcdn.com/v1/files/lmek23egkcvv3-RO/image;s=1000x700" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="https://frankfurt.apollo.olxcdn.com/v1/files/1ifpgh7utsu41-RO/image;s=1000x700" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
 
 
















    <!-- from filenew -->

      <div class="card-deck" >
      <div style="   max-width:350px;
    max-height:350px;
    min-width:350px;
    min-height:350px;
    margin-bottom:30px;
    
  " class="card" v-for="(capti, key) in photoGallery" :key='key'>
    <img :src="capti.photo" alt="" >
    <div class="card-body">
      <h5 class="card-title">{{capti.carName}}</h5>
      <p class="card-text"><small> {{capti.price}}</small></p>
      <p class="card-text"> <small>{{capti.caption}}</small></p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>







<!-- ============== -->



  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      
      
        <div class="col">
          <div class="cform" id="contact-form">
            
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
           <select v-model="client.car" id="car">
  <option value="0"></option>
  <option  value="SKODA FABIA 1.2  GASOLINE 2003">SKODA FABIA 1.2  GASOLINE 2003</option>
  <option value="2">FORD FOCUS 1.6 DIESEL 2007</option>
  <option value="3">SEAT LEON 1.9 DIESEL 2008</option>
  <option value="4">FORD FIESTA 1.5 DIESEL 2014</option>
  <option value="5">HYUNDAI I30 1.4 GASOLINE 2013</option>
  <option value="6">VOLKSWAGEN PASSAT 2.0 DIESEL 2008</option>
  <option value="7">FORD FOCUS CARAVAN 1.5 DIESEL 2016</option>
  <option value="8">OPEL ZAFIRA TOURER 2.0 DIESEL 2015, 7 seats</option>
  <option value="9">SKODA SUPERB 2.0 DIESEL AUTOMATIC 2011</option>
  <option value="10">FORD GRAND C MAX 2016 DIESEL</option>
  <option value="11">OPEL ASTRA SPORTS 2.0 DIESEL AUTOMATIC 2015</option>
  <option value="12">DACIA DUSTER  1.5  DIESEL 2013</option>
  <option value="13">AUDI A4 2.0 DIESEL 2011</option>
  <option value="AUDI A6 2.0 DIESEL 2010">AUDI A6 2.0 DIESEL 2010</option>
  <option value="15">VOLKSWAGEN PASSAT AUTOMATIC 2013</option>
  <option value="16">VOLKSWAGEN PASSAT 2.0 DIESEL AUTOMAT 2016</option>
<option value="17">Opel Insignia 2014 Limousine</option>
<option value="18">Opel Vivaro 8+1 2009</option>
</select>
       
        </div>
      
    </div>
  </div>
</div>

<!-- ============ -->







     </div>




  </div>
  
</template>


<script>
import firebase from "firebase";
// import * as filenew from './filenew.vue'

  // require("firebase/auth");
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
      car: null,
      reservations: { caption : '',
      carName : '',
      price: '$',
      img1: '',
      imageData: null,
      photoGallery: [],},
      editForm: [],



      
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

// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })

</script>


<style  lang="scss" scoped>
@import "../scss/variables.scss";

.car-center{
  text-align: center;
}

.card-deck{
  margin-top: 40px;
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
  font-size: 20px;
  text-align: left;
  vertical-align: middle;
  padding: 0 10px;
  border-radius: 12em;
  margin-top: 25px;
  margin-left: 55px;
}

.btn {
  margin-bottom: 60px;
}
</style>
