<template>
 <div>
   <input type="text" v-model='movie' class="form-control" @keyup.enter='addMovie'>

   <ul>
     <li v-for="(movieName, key) in movies" :key='key'>
      <h3> {{movieName.name}} </h3>
       <button class="btn btn-xs btn-primary">Edit</button> <br><br>
        <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editMovie(key)'>
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
      movie: null,
      movies: {},
      editForm: []

    }
  },
  methods:{
    //add in firebase
    addMovie(){
      firebase.database().ref('movies').push({name:this.movie})
      .then((data)=>{console.log(data)})
      .catch((error)=>{console.log(error)})
      ;
    },
    editMovie(key){
      firebase.database().ref('movies/'+ key).set({
        name:this.editForm[key]
      });
      this.editForm=[]
    }
  },
  created(){
    //show data of firebase
    firebase.database().ref('movies').on('value',(snapshot)=>{
      //  console.log(snapshot.val());
      this.movies=snapshot.val();
    });
  }
}
</script>

<style>
h1,h2 {
  font-weight: normal;
}
</style>