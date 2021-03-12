<template>
 <div>
   <br><br><br>
   <div>
   <input type="text" v-model='all.name1' class="form-control">
      <input type="text" v-model='all.name2' class="form-control">
      </div>
     <button @click='addreservation()'>add</button>
   <ul>
     <li v-for="(all, key) in reservations" :key='key'>
      <h3>name1 {{all.all.name1}} </h3>
       <h3>name2 {{all.all.name2}} </h3>
       <p>====</p>
       <!-- <button class="btn btn-xs btn-primary">Edit</button> <br><br>
        <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editreservation(key)'> -->
     </li>
     
   </ul>
 </div>
</template>

<script>
 import firebase from "firebase";
  require("firebase/auth");
export default {
  name: 'Crud',
  data() {
    return {
      all:{
      name1: null,
      name2: null,
      },
      reservations: {},
      editForm: []

    }
  },
  methods:{
    //add in firebase
    addreservation(){
      firebase.database().ref('reservations').push({all:this.all})
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
      ;
      //  firebase.database().ref('reservations').push({name2:this.name2})
      // .then((data)=>{console.log(data)})
      // .catch((error)=>{console.log(error)})
      // ;
      
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

<style>
h1,h2 {
  font-weight: normal;
}
</style>