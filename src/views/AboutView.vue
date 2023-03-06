<template>
  <v-parallax height="auto" class="imag"
    src="https://t3.ftcdn.net/jpg/01/82/95/58/360_F_182955848_KTRY5maOGCO85HsKhhc3jhAtJbiWbqIl.jpg">

  </v-parallax>
  <card1 />
  <!-- <v-card color="yellow-darken-3" height="20">
  </v-card> -->

  <v-card color="black">
    <br>
    <v-row align="center" justify="center">
      <v-col class="align-center" cols="12" sm="10" theme="dark">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" height="auto" max-width="auto"
            v-bind="props" theme="dark">
            <v-card-text class="font-weight-medium mt-12 text-center text-subtitle-3">
              <h2 class="text-h4  text-center font-weight-light grey-lighten-3">บริการเช่ารถ CARANT</h2>
            </v-card-text>
            <div class="">

              <v-container class="">
                <v-row no-gutters>
                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" color="grey-darken-3">
                      กำหนดวันรับรถ
                      <input type="datetime-local" v-model="DATA_RENTAL.RentDATE" /> <br />
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2">
                      กำหนดวันส่งคืนรถ
                      <input type="datetime-local" v-model="DATA_RENTAL.returnDATE" />
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" border color="grey-darken-3">
                      <v-combobox label="จังหวัด" :items="['เชียงใหม่', 'ลำปาง', 'เชียงราย', 'ลำพูน', 'พะเยา', 'น่าน']"
                        v-model="DATA_RENTAL.province1" width="50px"></v-combobox>
                    </v-sheet>
                  </v-col>
                </v-row>

                <v-row no-gutters>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2">
                      <v-responsive class="" max-width="344">
                        <v-text-field label="First name" variant="outlined" hide-details="auto"
                          v-model="DATA_RENTAL.fristname" maxlength="30" color="balck"></v-text-field>
                      </v-responsive>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" color="grey-darken-3">
                      <v-responsive class="" max-width="344">
                        <v-text-field label="LastName" maxlength="30" variant="outlined" hide-details="auto"
                          v-model="DATA_RENTAL.lastname" color="balck"></v-text-field>
                      </v-responsive>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2">
                      <v-combobox label="Model" :items="items1" v-model="DATA_RENTAL.model"></v-combobox>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" color="grey-darken-3">
                      <v-responsive class="" max-width="344">
                        <v-text-field label="email" variant="outlined" hide-details="auto" v-model="DATA_RENTAL.email"
                          color="balck"></v-text-field>
                      </v-responsive>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-sheet class="ma-2 pa-2" >
                      <v-responsive class="" max-width="344" height="auto">
                        <v-text-field label="Phone" variant="outlined" hide-details="auto" maxlength="10"
                          v-model="DATA_RENTAL.phone" color="balck"></v-text-field>
                      </v-responsive>
                    </v-sheet>
                  </v-col>


                  <v-col class="d-flex justify-space-around align-center flex-column flex-sm-row">
                    <v-row justify="center">
                      <v-dialog v-model="dialog" persistent width="auto" theme="dark">
                        <template v-slot:activator="{ props }">
                        <v-sheet color="grey-darken-3" >
                          <v-btn  prepend-icon="mdi-vuetify" variant="outlined" append-icon="mdi-vuetify" v-bind="props">
                            ดำเนินการต่อ
                          </v-btn></v-sheet>
                        </template>

                        <v-card>
                          <v-card-title class="text-h4">
                            ข้อมูล
                          </v-card-title>
                          <!--  <v-divider :thickness="3" class="border-opacity-75" inset></v-divider> -->
                          <article v-if="(x = CAR.find((elem) => elem.barnd == DATA_RENTAL.model))">

                            <v-row>
                              <v-col cols="12" sm="6" pd="2">
                                <v-sheet :show-arrows="false" class="align-center justify-center">
                                  <v-sheet class="d-inline-flex  ">
                                    <v-sheet class="ma-2 pa-2">
                                      <img :src="x.imag" cover :width=300 :height="200">
                                      <v-card color="yellow-darken-1" height="10"></v-card><br>
                                      <center>
                                        <h2>รถ : {{ x.barnd }} </h2>
                                      </center>
                                      <center>
                                        <h2>Model : {{ x.model }}</h2>
                                      </center>
                                    </v-sheet>
                                  </v-sheet>
                                </v-sheet>
                              </v-col>
                              <!-- <v-col cols="12" sm="4"></v-col> -->

                              <!--  <v-divider :thickness="2" class="border-opacity-75" vertical></v-divider> -->
                              <v-col cols="12" sm="6">
                                <v-sheet color="grey-lighten-5" class="ma-2 pa-2  justify-center align-center">
                                  <v-card class="pa-3" :class="bg - surface - variant">
                                    <v-layout row wrap>
                                      <v-flex xs12 md6>
                                        <div class="caption grey--text">รับรถ | คืนรถ</div>
                                        <div>ชื่อ - นามสกุล : {{ DATA_RENTAL.fristname }} {{ DATA_RENTAL.lastname }}
                                        </div>
                                        <div>เบอร์โทร : {{ DATA_RENTAL.phone }}</div>
                                        <v-divider class="border-opacity-100"></v-divider>
                                        <div>สถานที่รับรถ >>> จังหวัด {{ DATA_RENTAL.province1 }}</div>
                                        <div>สถานที่คืนรถ >>> จังหวัด {{ DATA_RENTAL.province1 }}</div>
                                        <v-divider class="border-opacity-100"></v-divider>
                                        <div>วันที่เช่า : {{ DATA_RENTAL.RentDATE }}</div>
                                        <div>วันที่คืน : {{ DATA_RENTAL.returnDATE }}</div>
                                        <div>จำนวน : {{ cal_date() }} วัน </div>
                                        <v-divider class="border-opacity-100"></v-divider>
                                        <div>รวมค่าเช่าทั้งหมด : {{ x.priceDAY * cal_date() }} บาท </div>

                                        <v-divider class="border-opacity-100"></v-divider><br>
                                        <center><v-btn variant="outlined" @click="addCardata()">ยืนยันการจอง</v-btn>
                                        </center>
                                      </v-flex>
                                    </v-layout>
                                  </v-card>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </article>
                          <v-divider :thickness="3" class="border-opacity-75"></v-divider>
                          <v-card-text>กรุณาเช็คข้อมูลให้ละเอียดก่อนกดปุ่มยืนยันการจอง</v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red-accent-4" variant="text" @click="dialog = false">
                              Close
                            </v-btn>

                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </div>

          </v-card>
        </v-hover>
      </v-col>
    </v-row><br><br>


  </v-card>
  <v-card color="grey-darken-4">
    <ask />
  </v-card>






  <v-divider class="border-opacity-100"></v-divider>
  {{ items2 }}
</template>
<script setup>

import { ref,onMounted } from "vue";
import { collection, addDoc, doc,getDoc ,query,where,getDocs} from "firebase/firestore";
import { db } from "../main";
import CAR from "../DATA/CAR.json";
import { useRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import card1 from "../components/top.vue"
import ask from "../components/ask.vue"



const dialog = ref(false)
const router = useRouter();
/* const car = CAR; */
const DATA_RENTAL = ref({
  fristname: "",
  lastname: "",
  model: "",
  phone: "",
  province1: "",
  RentDATE: "date",
  returnDATE: "date",
  price: "",
  email: ""
});
/* const allcar = ref([]); */

const items1 = ref(['Honda Accordv',
  'Toyota Altis 1.6',
  'Isuzu Mu-x',
  'Isuzu DmaxExtraCab',
  'C-HR HV',
  'Yaris ATIV'])


function cal_date() {
  var d1 = new Date(DATA_RENTAL.value.RentDATE);
  var d2 = new Date(DATA_RENTAL.value.returnDATE);
  var diff = d2.getTime() - d1.getTime();
  return (Math.ceil(diff / (1000 * 60 * 60 * 24)));
}


async function addCardata(d) {
  try {
    const docRef = await addDoc(collection(db, "DRIVECAR"), DATA_RENTAL.value);
    alert("ยืนยันการจองเสร็จสิ้น");
    console.log("Document written with ID: ", docRef.id);
    router.push('hitory')
    dialog.value = d

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/* const datacar = ref([]); */
onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {

            console.log("ddddddddddddddd")
            console.log(user)
            check(user.uid)

            // ...
        } else {
            check(null)

            // ...
        }
    });
});

async function check(userID) {
  console.log('uid'+userID)
    const q = query(collection(db, "users"), where("uid", "==", userID));
    if (q) {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log("check" + doc.id, " => ", doc.data());

           /*  const mydata = ref({ id: doc.id, data: doc.data() }); */
            update(doc.id)
            /* console.log("dataabut" + mydata.value) */
            //dataprofile.value.push(mydata.value);
        });
    } else {
        alert("ข้อมูลไม่ถูกต้อง");
        console.log("plese Login")
    }
}

async function update(data2) {
    console.log("DRIVECAR = " + data2);
    const docRef = doc(db, "users", data2);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.id, docSnap.data());

        /* datat.value = docSnap.data(); */
        DATA_RENTAL.value = docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}


</script>

<style scoped>
@media (min-width: 1022px) {
  @import url('https://fonts.googleapis.com/css2?family=KoHo&display=swap');

  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .imag {
    max-height: auto;
  }

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
}
</style>
