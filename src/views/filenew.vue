<template>
  <div class="container">
  
  <!-- <top-header></top-header>
  <button class="routes"><router-link class="nav-link text-light routes" to="/filenew">Adauga masini</router-link></button>
 <button class="routes"><router-link class="nav-link text-light" to="/admin">Vizualizare rezervări</router-link></button> -->

  <div class="row" style="text-align: center">
    
<div class="col">
<button class=" btn px-4 buton" type="button">
        <a class="a" href="./admin"
          >Vizualizează rezervări</a
        >
      </button>

</div>
   <div class="col">
      <button class="btn px-4 buton" type="button">
        <a class="a" href="./filenew">Adauga mașini</a>
      </button>
     
      </div>
      
      <div class="col"><top-header class="buton">
      
    </top-header></div>
      
      
      



    
    </div>
    <div class="row">
      <div class="text-center font-weight-black">
        
      </div>
    </div>
    <h1 class="text-center font-weight-black">Incarcă o nouă masină pe site</h1>

    <div class="row">
      <div class="aa">
        <div>
          <div>
            <button type="button" class="btn a bphoto" @click="click1">
              Alege o fotografie
            </button>

            <input
              type="file"
              ref="input1"
              style="display: none"
              @change="previewImage"
              accept="image/*"
            />
          </div>

          <div v-if="imageData != null">
            <img
              class="preview"
              style="margin-top: 40px; margin-bottom: 40px"
              height="268"
              width="356"
              :src="img1"
            />
            <br />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="row">
          <input
            class="form-control"
            style="max-width: 400px"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="description"
            type="text"
            placeholder="Descriere"
          />
        </div>
      </div>
      <div class="col">
        <div class="row">
          <input
            class="form-control"
            style="max-width: 400px"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="price"
            type="text"
            placeholder="Pretul"
          />
        </div>
      </div>
      <div class="col">
        <div class="row">
          <input
            class="form-control"
            style="max-width: 400px"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="carName"
            type="text"
            placeholder="Modelul Masinii"
          />
        </div>
      </div>
      <div class="col">
        <div class="row">
          <input
            class="form-control"
            style="max-width: 400px"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            v-model="carCod"
            type="text"
            placeholder="Codul Masinii"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="text-center">
        <button type="button" class="btn a bphoto" @click="create">
          Incarcă
        </button>
      </div>
    </div>

    <!-- </li> -->
    <div class="card-deck">
      <!-- <div
        style="
          max-width: 350px;
          max-height: 350px;
          min-width: 350px;
          min-height: 350px;
          margin-bottom: 30px;
        "
        class="card"
        v-for="(capti, key) in photoGallery"
        :key="key"
      >
        <img :src="capti.img1" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ capti.carName }}</h5>
          <p class="card-text">
            <small> {{ capti.price }} Lei/zi</small>
          </p>
          <p class="card-text">
            <small>{{ capti.caption }}</small>
          </p>
          <p class="card-text">
            <small>{{ capti.carCod }}</small>
          </p>

          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div> -->
      <div class="card" v-for="(capti, key) in photoGallery" :key="key">
        <img :src="capti.img1" alt="" />
        <div class="card-body">
          <p class="card-title">
            MODEL:{{ capti.carName }} <br />
            PREȚ:{{ capti.price }} <br />
            DESCRIERE:{{ capti.description }}
            <br />
            COD MASINA: {{ capti.carCod }}
            <br />
            <button class="btn btn-xs btn-danger" @click="deleteCar(key)">
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import TopHeader from '../components/Top-Header.vue';
require("firebase/auth");
// import Vuetify from 'vuetify';

// Vue.use(Vuetify);

export default {
  
  components: { "top-header": TopHeader },
  data() {
    return {
      description: "",
      carName: "",
      price: "",
      img1: "",
      carCod: "",
      imageData: null,
      photoGallery: [],
    };
  },
  // mounted() {
  //   this.getSecrets();
    
  // },

 methods: {
  //   async getSecrets() {
  //     const token = await firebase.auth().currentUser.getIdToken();
  //     let config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     this.secrets = await this.$axios.get(
  //       "http://localhost:/",
  //       //  + comment linia de mai sus (36)"),
  //       config
  //     );
  //     this.secrets = this.secrets.data;
  //   },
    create() {
      const cars = {
        img1: this.img1,
        description: this.description,
        carName: this.carName,
        price: this.price,
        carCod: this.carCod,
      };

      firebase
        .database()
        .ref("cars")
        .push(cars)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    click1() {
      this.$refs.input1.click();
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },

    deleteCar(key) {
      firebase
        .database()
        .ref("cars/" + key)
        .remove();
    },
  },
  created() {
    //show data of firebase
    firebase
      .database()
      .ref("cars")
      .on("value", (snapshot) => {
        //  console.log(snapshot.val());
        this.photoGallery = snapshot.val();
      });
  },
};
</script>



<style lang="scss" scoped>
@import "../scss/variables.scss";

.a {
  color: $alb;
}

.bphoto {
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: $turcoaz;
}

.buton {
  background-color: $turcoaz;
  
   min-width: 210px;
  margin-top: 120px;
   border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  margin-bottom: 38px;
}

.routes{
  background-color: $turcoaz;
  margin-left: 12px;
  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  color: $alb;
}
.card-deck {
  margin-top: 80px;
  // display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  max-width: 350px;
  max-height: 350px;
  min-width: 350px;
  min-height: 480px;
  margin-bottom: 30px;
  margin-top: 30px;

  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

  @media (max-width: 422px) {
            max-width: 300px;
  max-height: 300px;
  min-width: 300px;
  min-height: 480px;
  margin-bottom: 30px;
  margin-top: 30px;
        }

  //        @media (max-width: 970px) {
  //           max-width: 250px;
  // max-height: 250px;
  // min-width: 250px;
  // min-height: 480px;
  // margin-bottom: 30px;
  // margin-top: 30px;
  //       }
}
</style>