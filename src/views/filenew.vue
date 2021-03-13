<template>
  <div class="container">
    <br><br><br><br>
    <div class="row">
      <div class="text-center font-weight-black">
        <h1>Upload a photo</h1>
      </div>
    </div>

   
    <div class="row">
      <div class="col md6 offset-sm3 ">
       <div>
         <div >
           <button @click="click1">choose photo</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="img1">
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
              <div class="row inp3">
                <input v-model="caption" type="text" placeholder="Numar telefon" />
              </div>
            </div>
      
        
        
     
    </div>
    <div class="row">
      <div class="text-center">
        <button color="pink" @click="create">upload</button>
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
    border: 3px solid black;
  " class="card" v-for="(capti, key) in photoGallery" :key='key'>
    <img :src="capti.photo" alt="" >
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"> {{capti.caption}}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
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
      img1: '',
      imageData: null,
      photoGallery: []
      
    }
  },

  methods: {
    create () {
      
      const post = {
        photo: this.img1,
        caption: this.caption        
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
