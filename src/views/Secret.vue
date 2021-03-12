<template>
  <div>
    <br><br><br><br>
    <top-header></top-header> 
    <h3>
      <!-- <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5> -->
      <h4>         Secret Content</h4>
    </h3>
      <!-- <input type="text" v-model='reservation' class="form-control" @keyup.enter='addreservation'> -->

   <ul>
     <li v-for="(reservationName, key) in reservations" :key='key'>
      <h3>Nume: {{reservationName.client.name}} <button class="btn btn-xs btn-primary" @click='editReservation(key)'>Edit</button> 
      
      <h3>Email: {{reservationName.client.email}} </h3>
      <h3>Telefon: {{reservationName.client.tel}} </h3>
      <h3>De la: {{reservationName.client.date1}} </h3>
      <h3>Pana la: {{reservationName.client.date2}} </h3>
      
       
       <button class="btn btn-xs btn-danger" @click="deleteReservation(key)">Delete</button></h3> 
        <br><br>
        <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editReservation(key)'>
        
     </li>
    
   </ul>
  </div>
</template>


<script>

import TopHeader from "../components/Top-Header.vue"

  


import firebase from 'firebase' ; 
require('firebase/auth');


export default {
  name: 'Crud',
  components: {'top-header': TopHeader,
                },
  data() {
    return {
      secrets: "",
       reservation: null,
      reservations: {},
      editForm: [],
      
    };
  },
  mounted() {
    this.getSecrets();
  },
  
  
  
  methods: {
    async getSecrets() {
      const token = await firebase.auth().currentUser.getIdToken();
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      this.secrets = await this.$axios.get(
         "http://localhost:3000/erik", 
        // console.log("http://localhost:3000/erik + comment linia de mai sus (36)"),
        config
      );
      this.secrets = this.secrets.data;
    }
  
  ,
    // edit in firebase
    
    editReservation(key){
      firebase.database().ref('reservations/'+ key + '/client').set({
        name:this.editForm[key],
        email:this.editForm[key]
         
      });
      this.editForm=[];
    },

    deleteReservation(key){
      firebase.database().ref('reservations/'+ key).remove();
      
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

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>