<template>
  <div class="all zone1">
    <!-- <section
      id="contact-form"
      class="section appear clearfix contact-form img-home"
    ></section> -->

    <!-- from filenew -->
    <div class="container">
      <div class="card-deck">
        <div class="card" v-for="(capti, key) in photoGallery" :key="key">
          <img :src="capti.photo" alt="" />
          <div class="card-body">
            <p class="card-title">
              MODEL:{{ capti.carName }} <br />
              PREȚ:{{ capti.price }} <br />
              DESCRIERE:{{ capti.caption }}
            <br>
            COD MASINA: {{capti.carCod}}
            </p>

            

            <button v-on:click="carNameReservation(capti.carName, capti.carCod)"
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Rezervă
            </button>

            <div
              class="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="col">
                    <div class="cform" id="contact-form">
                      <div class="col">
                        <div class="row inp1">
                          <input
                            v-model="client.name"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="row inp2">
                          <input
                            v-model="client.email"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row inp3">
                          <input
                            v-model="client.tel"
                            type="text"
                            placeholder="Numar telefon"
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.date1"
                            type="date"
                            placeholder="De la:"
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.date2"
                            type="date"
                            placeholder="Pana la:"
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.car"
                            readonly="true"
                          
                          />
                        </div>
                      </div>

                      <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.carCod"
                            readonly="true"
                          
                          />
                        </div>
                      </div>

                      <button
                        class="btn bg-light px-4"
                        type="button"
                        @click="addreservation()"
                      >
                        <a href="http://localhost:8080/admin">click here</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->
      </div>
    </div>
    
  </div>
</template>


<script>
import firebase from "firebase";

// require("firebase/auth");
export default {
  name: "Crud",
  data() {
    return {
      client: {
        name: null,
        email: null,
        tel: null,
        date1: null,
        date2: null,
        car: null,
     
        reservations: {},
        editForm: [],
        
      },
     

      photoGallery: [],
    };
  },
  methods: {
    carNameReservation: function (carName, cod) {
      this.client.car= carName;
      this.client.carCod = cod;
     
    },
    //add in firebase
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
  },

  // created() {
  //   //show data of firebase
  //   firebase
  //     .database()
  //     .ref("reservations")
  //     .on("value", (snapshot) => {
  //       //  console.log(snapshot.val());
  //       this.reservations = snapshot.val();
  //     });
  // },

  created() {
    //show data of firebase
    firebase
      .database()
      .ref("photoGallery")
      .on("value", (snapshot) => {
        //  console.log(snapshot.val());
        this.photoGallery = snapshot.val();
      });
  },
};
</script>


<style  lang="scss" scoped>
@import "../scss/variables.scss";

.car-center {
  text-align: center;
}

.card-deck {
  margin-top: 80px;
  // display: flex;
   align-items: center;
   justify-content: center;
  // max-width: 350px;
  // max-height: 350px;
  // min-width: 350px;
  // min-height: 480px;
  // margin-bottom: 30px;

  
}

.card {
  max-width: 350px;
  max-height: 350px;
  min-width: 350px;
  min-height: 480px;
  margin-bottom: 30px;

  border-radius: 0.125rem;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);

   
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
