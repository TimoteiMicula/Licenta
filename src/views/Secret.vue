<template>
  <div>
    <h3>
      <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5>
      <h4>Secret Content</h4>
    </h3>
      <input type="text" v-model='movie' class="form-control" @keyup.enter='addMovie'>

   <ul>
     <li v-for="(movieName, key) in movies" :key='key'>
      <h3> {{movieName.name}} </h3>
       <button class="btn btn-xs btn-primary">Edit</button>
       <button class="btn btn-xs btn-danger" @click="deleteMovie(key)">Delete</button>
        <br><br>
        <input type="text" v-model="editForm[key]" class="form-control" @keyup.enter='editMovie(key)'>
     </li>
     
   </ul>
  </div>
</template>


<script>

import firebase from 'firebase' ; 
require('firebase/auth');


export default {
  name: 'Crud',
  data() {
    return {
      secrets: "",
       movie: null,
      movies: {},
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
      this.editForm=[];
    },

    deleteMovie(key){
      firebase.database().ref('movies/'+ key).remove();
      
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

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>