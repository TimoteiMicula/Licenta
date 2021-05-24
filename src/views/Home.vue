<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
<template>
  <div class="all zone1">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <section
    
      class="section  img-home"
    ></section>  -->

    <!-- from filenew -->
    <div class="container">
      <div class="card-deck">
        <div class="card" v-for="(capti, key) in photoGallery" :key="key">
          <img :src="capti.img1" alt="" />
          <div class="card-body">
            <p class="card-title">
              MODEL:{{ capti.carName }} <br />
              PREȚ:{{ capti.price }} <br />
              DESCRIERE:{{ capti.caption }}
              <br />
              COD MASINA: {{ capti.carCod }}
            </p>

            <button
              v-on:click="
                carNameReservation(capti.carName, capti.carCod, capti.img1)
              "
              type="button"
              class="btn b-rezerva"
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
              <div class="modal-dialog modal-md">
                <div class="modal-content">
                  <div class="col">
                    <div class="cform">
                      <!-- display img ------------------ -->
                      <div class="offset-lg-1 col-lg-10 ">
                        <img class="imgModal" :src="client.img1" alt="" />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp1">
                          <input
                            v-model="client.name"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-user"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.name"
                          type="text"
                          class="form-control"
                          placeholder="Name"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp2">
                          <input
                            v-model="client.email"
                            type="text"
                            placeholder="Email"
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text emailImp"
                            ><i class="fa fa-envelope"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.email"
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp3">
                          <input
                            v-model="client.tel"
                            type="text"
                            placeholder="Numar telefon"
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-phone"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.tel"
                          type="text"
                          class="form-control"
                          placeholder="Telefon"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.date1"
                            type="date"
                            placeholder="De la:"
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-calendar"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.date1"
                          type="text"
                          onfocus="(this.type='date')"
                          class="form-control"
                          placeholder="Din data de:"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.date2"
                            type="date"
                            placeholder="Pana la:"
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-calendar"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.date2"
                          type="text"
                          onfocus="(this.type='date')"
                          class="form-control"
                          placeholder="Pana la data de:"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.car"
                            readonly="true"
                          
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-car"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.car"
                          readonly="true"
                          type="text"
                          class="form-control"
                        />
                      </div>

                      <!-- <div class="col">
                        <div class="row inp4">
                          <input
                            v-model="client.carCod"
                            readonly="true"
                          
                          />
                        </div>
                      </div> -->

                      <div class="offset-md-1 col-md-10 input-group inputModal">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fa fa-server"></i
                          ></span>
                        </div>
                        <input
                          v-model="client.carCod"
                          readonly="true"
                          type="text"
                          class="form-control"
                        />
                      </div>

                      <button
                        class="offset-md-1 col-md-10 btn px-4 submitbtn"
                        type="button"
                        @click="addreservation()"
                      >
                        <a class="a" href="http://localhost:8080/admin"
                          >Trimite</a
                        >
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
        img1: null,
        reservations: {},
        editForm: [],
      },

      photoGallery: [],
    };
  },
  methods: {
    carNameReservation: function (carName, cod, img1) {
      this.client.car = carName;
      this.client.carCod = cod;
      this.client.img1 = img1;
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
      .ref("cars")
      .on("value", (snapshot) => {
        //  console.log(snapshot.val());
        this.photoGallery = snapshot.val();
      });
  },
};
</script>


<style  lang="scss" scoped>
@import "../scss/variables.scss";

.b-rezerva {
  background-color: $turcoaz;
  color: $alb;
}

.a {
  color: $alb;
}

.submitbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $turcoaz;
  margin-top: 20px;
}

.inputModal {
  margin-top: 10px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
.has-feedback {
  position: relative;
}
.form-group {
  margin-bottom: 15px;
}

.emailImp {
  padding: 9.6px;
}

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
.imgModal {
  max-width: 350px;
  max-height: 350px;
  min-width: 350px;
  

  

  @media (max-width: 422px) {
            max-width: 250px;
  max-height: 250px;
  min-width: 100px;
 
 
        }
}

.img-home {
  background-image: url("../assets/home-t.jpg");
  height: 800px;
}

// #contact-form input[type="text"] {
//   height: 60px;
//   width: 500x;
//   margin-bottom: 30px;
// margin-top: 100px;;
// }

// .contact-form input,
// .contactForm textarea {
//   background: rgb(209, 209, 209);
//   font-family: "Open Sans", sans serif;
//   border: 0;
//   font-size: 14px;
//   text-align: left;
//   vertical-align: middle;
//   padding: 0 10px;
//   height: 40px;
//   margin-bottom: 30px;

//   border-radius: 10px;
// }

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

// .cform input,
// .inp {
// width: 55%;
// background: $alb;
// font-family: $font;
// border: 0;
// font-size: 20px;
// text-align: left;
// vertical-align: middle;
// padding: 0 10px;
// border-radius: 12em;
// margin-top: 25px;
// margin-left: 55px;
// }

.btn {
  margin-bottom: 60px;
}
</style>
