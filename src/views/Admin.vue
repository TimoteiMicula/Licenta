


<template>
  <div>
    <br /><br /><br /><br />
    <div class="container">
    <div class="row" style="text-align: center">
    
<div class="col">
<button class=" btn px-4 buton" type="button">
        <a class="a" href="http://localhost:8080/admin"
          >Vizualizează rezervări</a
        >
      </button>

</div>
   <div class="col">
      <button class="btn px-4 buton" type="button">
        <a class="a" href="http://localhost:8080/filenew">Adauga mașini</a>
      </button>
     
      </div>
      
      <top-header>
      
    </top-header>
      
      



    
    </div>
    </div>
    

    <h3>
      <!-- <p class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</p> -->
      <h4 class="text-center">Admin</h4>
    </h3>
    <!-- <input type="text" v-model='reservation' class="form-control" @keyup.enter='addreservation'> -->

    <!-- <div class="row">
      <div class="card-deck"> -->
        <!-- <div class="card" v-for="(capti, key) in photoGallery" :key="key">
          <img :src="capti.img1" alt="" />
          <div class="card-body">
            <p class="card-title">
              MODEL:{{ capti.carName }} <br />
              PREȚ:{{ capti.price }} <br />
              DESCRIERE:{{ capti.caption }}
              <br />
              COD MASINA: {{ capti.carCod }}
            </p> -->
      <!-- <div class="container"> -->
        <div class="container">
      <div class="card-deck">
        <div class="card" v-for="(reservationName, key) in reservations" :key="key">
          <div >
             <div >
            <img class="imgModal"   :src="reservationName.client.img1" alt="" />
          </div>



          








            <p class="card-title">
              Nume: {{ reservationName.client.name }}
              <br>
              <input
                type="text"
                v-model="editName[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              Email: {{ reservationName.client.email }}
              <br>
              <input
                type="text"
                v-model="editEmail[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              Telefon: {{ reservationName.client.tel }}
              <br>
              <input
                type="text"
                v-model="editTel[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              De la: {{ reservationName.client.date1 }}
<br>
              <input
                type="text"
                v-model="editDate1[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              Pana la: {{ reservationName.client.date2 }}
              <br>
              <input
                type="text"
                v-model="editDate2[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              Masina: {{ reservationName.client.car }}
              <br>
              <input
                type="text"
                v-model="editCar[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            <p class="card-title">
              Cod unic masina: {{ reservationName.client.carCod }}
              <br>
              <input
                type="text"
                v-model="editCarCod[key]"
                :disabled="!isEditing"
                :class="{ view: !isEditing }"
              />
            </p>
            
          </div>

         

          <button
            class="btn btn-xs btn-primary"
            @click="isEditing = !isEditing"
            v-if="!isEditing"
          >
            Edit
          </button>

          <button
            class="btn btn-xs"
            @click="editReservation(key)"
            v-else-if="isEditing"
          >
            Save
          </button>
          <button
            class="btn btn-xs"
            v-if="isEditing"
            @click="isEditing = false"
          >
            Close edit
          </button>

          <!-- <p>Nume: {{reservationName.client.name}}  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Edit
</button></p>  -->

          <!-- Modal -->

          <!-- <p>Email: {{reservationName.client.email}} </p>
      <p>Telefon: {{reservationName.client.tel}} </p>
      <p>De la: {{reservationName.client.date1}} </p>
      <p>Pana la: {{reservationName.client.date2}} </p>
      <p>Masina: {{reservationName.client.car}} </p>
      <p>Cod unic masina: {{reservationName.client.carCod}} </p> -->

          <button class="btn btn-xs btn-danger" @click="deleteReservation(key)">
            Delete
          </button>
          <br /><br />
          <!-- :value="reservationName.client.name" -->
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>


<script>
import TopHeader from "../components/Top-Header.vue";

import firebase from "firebase";
require("firebase/auth");

export default {
  name: "Crud",
  components: { "top-header": TopHeader },
  data() {
    return {
      secrets: "",
      reservation: null,
      reservations: {},

      editName: [],
      editEmail: [],
      editDate2: [],
      editDate1: [],
      editTel: [],
      editCar: [],
      editCarCod: [],
      

      


      isEditing: false,

      ////////////////////// ?????//////////////////////////////

      ////////////////////// ?????//////////////////////////////
    };
  },
  // mounted() {
  //   this.getSecrets();

  // },

  methods: {
    // async getSecrets() {
    //   const token = await firebase.auth().currentUser.getIdToken();
    //   let config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };
    //   this.secrets = await this.$axios.get(
    //     "http://localhost:/",
    //     //  + comment linia de mai sus (36)"),
    //     config
    //   );
    //   this.secrets = this.secrets.data;
    // },

    // edit in firebase

    editReservation(key) {
      firebase
        .database()
        .ref("reservations/" + key + "/client")
        .set({
          name: this.editName[key],
          email: this.editEmail[key],
          tel: this.editTel[key],
          date1: this.editDate1[key],
          date2: this.editDate2[key],
          car: this.editCar[key],
          carCod: this.editCarCod[key],
          

          
          
        });

        
      this.editForm = [];
    },

    addreservation() {
      firebase
        .database()
        .ref("reservations")
        .push({ client: this.client })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteReservation(key) {
      firebase
        .database()
        .ref("reservations/" + key)
        .remove();
    },
  },

  // closeEdit(name) {
  //   this.editForm = name;
  //   this.isEditing = false;
  // },
  created() {
    //show data of firebase
    firebase
      .database()
      .ref("reservations")
      .on("value", (snapshot) => {
        //  console.log(snapshot.val());
        this.reservations = snapshot.val();
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

.buton {
  background-color: $turcoaz;
  
   min-width: 210px;
  margin-top: 7px;
   border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

col{
   border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.a {
  color: $alb;
}

.view {
  opacity: 100%;
}

div {
  color: inherit;
}
.imgModal {
  max-width: 349px;
  max-height: 350px;
  min-width: 349px;
}

.card {
  max-width: 350px;
  max-height: 830px;
  min-width: 350px;
  min-height: 830px;
  margin-bottom: 30px;
  margin-top: 30px;

  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

  @media (max-width: 422px) {
            max-width: 300px;
  max-height: 780px;
  min-width: 300px;
  min-height: 780px;
  margin-bottom: 30px;
  margin-top: 30px;
        }

  .card-title {
        text-align: center;
  }      
}
</style>