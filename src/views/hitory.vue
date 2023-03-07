<template>
  <v-card color="black">
    <v-card color="balck">
      <br />
      <br />
      <v-container class="bg-black">
        <br />
        <br />

        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-hover v-slot="{ isHovering, props }" disabled>
              <v-card
                :elevation="isHovering ? 12 : 2"
                class="mx-auto"
                height="240"
                max-width="500"
                v-bind="props"
                variant="outlined"
              >
                <v-card-text class="my-4 text-center text-h6">
                  ประวัติการจอง
                </v-card-text>

                <center>
                  <v-responsive class="" max-width="300" text-center>
                    <v-text-field
                      label="โปรดระบุ e-mail ผู้จอง"
                      variant="outlined"
                      hide-details="auto"
                      v-model="email"
                      color="balck"
                      required
                    ></v-text-field>
                  </v-responsive>

                  <br /><v-btn
                    append-icon="mdi-vuetify"
                    variant="outlined"
                    @click="check()"
                  >
                    ตรวจสอบ
                  </v-btn>
                </center>
                <br />
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <br />

        <div>
          <v-table theme="dark">
            <thead>
              <tr>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>กำหนดเช่า</th>
                <th>กำหนดคืน</th>
                <th>จังหวัดที่รับรถ</th>
                <th>จังหวัดที่คืนรถ</th>
                <th>หมายเลขการเช่ารถ</th>
                <th>อีเมล</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in allcar" :key="index">
                <td>{{ item.data.fristname }}</td>
                <td>{{ item.data.lastname }}</td>
                <td>{{ item.data.RentDATE }}</td>
                <td>{{ item.data.returnDATE }}</td>
                <td>{{ item.data.province1 }}</td>
                <td>{{ item.data.province1 }}</td>
                <td>{{ item.id }}</td>
                <td>{{ item.data.email }}</td>
                <td>
                  <!-- <v-btn color="error" variant="plain" @click="deleteMenu(item.id)"> -->
                    <v-row justify="center">
                          <v-dialog v-model="dialog1" persistent width="auto">
                            <template v-slot:activator="{ props }">
                              <v-btn v-bind="props" color="error">
                                ยกเลิกการจอง
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="text-h5">
                                 <br>
                                <v-alert type="info" color="error" title="Alert title"
                                  text="โปรดกดปุ่ม >> Confirm << เพื่อยืนยันการยกเลิกการจองครั้งนี้"
                                  variant="tonal"></v-alert>
                              </v-card-title>
                              <v-card-text> <h2> E - mail : {{ item.data.email }} <br> หมายเลขการเช่ารถ :{{ item.id }}</h2></v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn  variant="flat" @click="dialog1 = false">
                                  Close
                                </v-btn>
                                <v-btn  variant="flat" @click="deleteMenu(item.id,false)">
                                  Confirm
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-row>
               <!--    </v-btn> -->
                </td>
                <td>
                  <div>
                    <v-dialog transition="dialog-bottom-transition" width="400">
                      <template v-slot:activator="{ props }">
                        <v-btn
                          color="light-blue-accent-3"
                          v-bind="props"
                          
                          @click="update(item.id)"
                        >
                          <!-- <v-icon icon="mdi-edit"></v-icon> -->
                          Edit</v-btn
                        >
                      </template>
                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-toolbar
                            color="amber-darken-3"
                            title="แก้ไขข้อมูลการจอง"
                          ></v-toolbar>
                          <v-card-text style="height: 400px">
                            <div>
                              <v-responsive class="mx-auto" max-width="344">
                                <v-text-field
                                  v-model="DATA_RENTAL.fristname"
                                  clearable
                                  hide-details="auto"
                                  label="FristName"
                                ></v-text-field>

                                <v-text-field
                                  v-model="DATA_RENTAL.lastname"
                                  clearable
                                  hide-details="auto"
                                  label="LastName"
                                ></v-text-field>

                                <v-text-field
                                  v-model="DATA_RENTAL.phone"
                                  clearable
                                  hide-details="auto"
                                  label="Phone"
                                ></v-text-field>

                                <v-combobox
                                  label="จังหวัด"
                                  :items="items1"
                                  v-model="DATA_RENTAL.province1"
                                  width="200"
                                ></v-combobox>

                                <v-sheet class="ma-2 pa-2" color="grey-darken-3">
                                  กำหนดวันรับรถ
                                  <input
                                    type="datetime-local"
                                    v-model="DATA_RENTAL.RentDATE"
                                  />
                                  <br />
                                </v-sheet>
                                <v-sheet class="ma-2 pa-2" color="grey-darken-3">
                                  กำหนดวันคืนรถ
                                  <input
                                    type="datetime-local"
                                    v-model="DATA_RENTAL.returnDATE"
                                  />
                                  <br />
                                </v-sheet>
                              </v-responsive>
                            </div>
                          </v-card-text><br><br>
                          <v-card-actions class="justify-end">
                            <v-btn variant="text" @click="isActive.value = false"
                              >Close</v-btn
                            >
                            <br>
                            <v-btn variant="text" @click="confirm(item.id)"
                              >Confrim</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-container>
    </v-card>
  </v-card>

  <v-card color=""><ask /></v-card>
</template>

<script setup>
import { ref } from "vue";
import {
  collection,
  setDoc,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../main";
import ask from "../components/ask.vue";

/* const dialog = ref(false); */

const DATA_RENTAL = ref({
  fristname: "",
  lastname: "",
  model: "",
  phone: "",
  province1: "",
  RentDATE: "date",
  returnDATE: "date",
  price: "",
});

const allcar = ref([]);
const items1 = ref(["พะเยา", "เชียงใหม่", "เชียงราย", "ลำพูน", "ลำปาง", "แพร่"]);
const email = ref("");
const datat = ref();
const dialog1 = ref(false);

async function update(data2) {
  console.log("DRIVECAR = " + data2);
  const docRef = doc(db, "DRIVECAR", data2);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.id, docSnap.data());
   
    datat.value = docSnap.data();
    DATA_RENTAL.value = datat.value;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function deleteMenu(data1, bool) {
  if (confirm("ยืนยันการยกเลิกรายการ")) {
    await deleteDoc(doc(db, "DRIVECAR", data1));
    dialog1.value = bool
    alert("การจองถูกยกเลิก")
  }
}

async function check() {
  const q = query(collection(db, "DRIVECAR"), where("email", "==", email.value));
  if (q) {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const mydata = ref({ id: doc.id, data: doc.data() });
      allcar.value.push(mydata.value);
    });
  } else {
    alert("ข้อมูลไม่ถูกต้อง");
  }
}

async function confirm(data ) {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "DRIVECAR", data), DATA_RENTAL.value);
  alert("แก้ไข้ข้อมูลการจองเสร็จสิ้น");
}
</script>
