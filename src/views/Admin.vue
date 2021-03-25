<template>
  <div>
    <br /><br /><br /><br />
    <top-header></top-header>
    <h3>
      <!-- <h5 class="secret" v-for="secret in secrets" :key="secret.char_id">{{secret.name}}</h5> -->
      <h4 class="text-center">Admin</h4>
    </h3>
    <!-- <input type="text" v-model='reservation' class="form-control" @keyup.enter='addreservation'> -->

    <div class="row ">
      <div class="container">
      <ul  v-for="(reservationName, key) in reservations" :key="key">
        <div class="col-md">
        <h5>
          Nume: {{ reservationName.client.name }}
          <input
            type="text"
            v-model="editName[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          Email: {{ reservationName.client.email }}
          <input
            type="text"
            v-model="editEmail[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          Telefon: {{ reservationName.client.tel }}
          <input
            type="text"
            v-model="editTel[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          De la: {{ reservationName.client.date1 }}

          <input
            type="text"
            v-model="editDate1[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          Pana la: {{ reservationName.client.date2 }}
          <input
            type="text"
            v-model="editDate2[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          Masina: {{ reservationName.client.car }}
          <input
            type="text"
            v-model="editCar[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        <h5>
          Cod unic masina: {{ reservationName.client.carCod }}
          <input
            type="text"
            v-model="editCarCod[key]"
            :disabled="!isEditing"
            :class="{ view: !isEditing }"
          />
        </h5>
        </div>

        <div class="col-md-2">
          <img class="imgModal" :src="reservationName.client.img1" alt="" />
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
          @click="
            editReservation( key) "
          v-else-if="isEditing"
        >
          Save
        </button>
        <button class="btn btn-xs" v-if="isEditing" @click="isEditing = false">
          Close edit
        </button>

        <!-- <h5>Nume: {{reservationName.client.name}}  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Edit
</button></h5>  -->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Editare Nume Client
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  v-model="editName[key]"
                  style="width: 70%"
                  class="form-control"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="editReservation(key, reservationName.client)"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
          
        </div>
        <!-- <h5>Email: {{reservationName.client.email}} </h5>
      <h5>Telefon: {{reservationName.client.tel}} </h5>
      <h5>De la: {{reservationName.client.date1}} </h5>
      <h5>Pana la: {{reservationName.client.date2}} </h5>
      <h5>Masina: {{reservationName.client.car}} </h5>
      <h5>Cod unic masina: {{reservationName.client.carCod}} </h5> -->

        <button class="btn btn-xs btn-danger" @click="deleteReservation(key)">
          Delete
        </button>
        <br /><br />
        <!-- :value="reservationName.client.name" -->
        
      </ul>
    </div>
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
.view {
  
  opacity: 0%;
}

div {
  color: inherit;
}
.imgModal{
 max-width: 350px;
  max-height: 350px;
  min-width: 350px;
}

</style>