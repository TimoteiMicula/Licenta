<template>
  <div class="container">
    <br><br><br><br>
    <div class="row">
      <div class="text-center font-weight-black">
        <h1>Upload a photo</h1>
      </div>
    </div>

   
    <div class="row">
      <div class="col">
       <div>
         <div >
           <button type="button" class="btn btn-primary" @click="click1">choose photo</button>

           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview" style="margin-top:40px; margin-bottom:40px;" height="268" width="356" :src="img1">
       <br>
       </div>   
      
       </div>
       </div>
    </div>


    <div class="row" >
      <!-- <input
        v-model="caption"
        label="Caption goes here"/> -->

        <div class="col">
              <div class="row">
                <input class="form-control" style="max-width: 400px" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="caption" type="text" placeholder="Descriere" />
              </div>
            </div>
             <div class="col">
              <div class="row ">
                <input class="form-control" style="max-width: 400px" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="price" type="text" placeholder="Pretul" />
              </div>
            </div>
             <div class="col">
              <div class="row ">
                <input class="form-control" style="max-width: 400px" aria-label="Small" aria-describedby="inputGroup-sizing-sm" v-model="carName" type="text" placeholder="Modelul Masinii" />
              </div>
            </div>
      
        
        
     
    </div>
    <div class="row">
      <div class="text-center">
        <button type="button" style="margin-top:40px; margin-bottom:40px;" class="btn btn-primary" @click="create">upload</button>
      </div>

    </div>
     
     <!-- <li v-for="(capti, key) in photoGallery" :key='key'> -->
      
     
     
      <!-- <p>aas{{capti.img1}}</p> -->
     
      <!-- <img :src="capti.photo" alt=""> -->
    
      
       
       
     <!-- </li> -->
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



  <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

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
</div> -->

<!-- ============ -->







     </div>
    
   
  </div>
  
</template>


<script>
import firebase from 'firebase';

// import Vuetify from 'vuetify';

// Vue.use(Vuetify);

export default {
  data () {
    return {
      caption : '',
      carName : '',
      price: '$',
      img1: '',
      imageData: null,
      photoGallery: []
      
    }
  },

  methods: {
    create () {
      
      const post = {
        photo: this.img1,
        caption: this.caption,
        carName:this.carName,
        price: this.price,

      }

      firebase.database().ref('photoGallery').push(post)
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    },

  click1() {
  this.$refs.input1.click()   
},

previewImage(event) {
  this.uploadValue=0;
  this.img1=null;
  this.imageData = event.target.files[0];
  this.onUpload()
},

onUpload(){
  this.img1=null;
  const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
  storageRef.on(`state_changed`,snapshot=>{
  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
    }, error=>{console.log(error.message)},
  ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.img1 =url;
          console.log(this.img1)
          
        });
      }      
    );
 },
 
  },
  created(){
    //show data of firebase
    firebase.database().ref('photoGallery').on('value',(snapshot)=>{
      //  console.log(snapshot.val());
      this.photoGallery=snapshot.val();
    });
    
  },
  
}
</script>
