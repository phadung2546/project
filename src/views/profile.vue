<template>
  <br /><br /><br />
  <div>
    <ul v-for="(item, index) in dataprofile" :key="index">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-hover v-slot="{ isHovering, props }" disabled>
            <v-card :elevation="isHovering ? 12 : 2" class="mx-auto" color="grey-darken-4" height="400" max-width="300"
              v-bind="props">
              <v-card-text class="my-4 text-center text-h6"> Profile </v-card-text>
              <v-list-item>
                <v-avatar align-center text-center size="100px" color="#fff">
                  <button @click="profile()">
                    <v-img :width="112" aspect-ratio="1/1" cover
                      src="https://th.bing.com/th/id/R.1ce5f2f28d2108efdf2762506d9ef7c5?rik=Jix%2fZD1vxubHJg&pid=ImgRaw&r=0" title="dddddd"></v-img>
                  </button>
                </v-avatar>
                <span>{{ item.data.email }}</span>
                <template v-slot:append>
                  <v-menu transition="scroll-y-transition">
                    <template v-slot:activator="{ props }">
                      <v-btn variant="text" icon="mdi-chevron-down" v-bind="props"></v-btn>
                    </template>
                    <v-list>
                      <v-list-item link>
                        <v-row justify="center">
                          <v-dialog v-model="dialog" persistent width="1024">
                            <template v-slot:activator="{ props }">
                              <v-btn v-bind="props" @click="update(item.id)">
                                Edit Profile
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5">User Profile</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field label="first name*" v-model="dataP.fristname" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field label="Legal middle name" v-model="dataP.middle"
                                        hint="example of helper text only on focus"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        v-model="dataP.lastname" persistent-hint required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                      <v-text-field label="Email*" v-model="dataP.email" required></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                      <v-text-field label="AGE*" v-model="dataP.age" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                      <v-text-field label="Phone*" v-model="dataP.phone" required></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                                <small>*indicates required field</small>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                                  Close
                                </v-btn>
                                <v-btn color="blue-darken-1" variant="text" @click="confirm(item.id, false)">
                                  Save
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-row>
                      </v-list-item>

                      <v-list-item link>
                        <v-row justify="center">
                          <v-dialog v-model="dialog1" persistent width="auto">
                            <template v-slot:activator="{ props }">
                              <v-btn v-bind="props">
                                Delete Account
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="text-h5">
                                Delete Account? <br>
                                <v-alert type="info" color="error" title="Alert title"
                                  text="After you delete an account, it's permanently deleted. Accounts can't be undeleted."
                                  variant="tonal"></v-alert>
                              </v-card-title>
                              <v-card-text> <h2> E - mail : {{ item.data.email }}</h2></v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green-darken-1" variant="flat" @click="dialog1 = false">
                                  Close
                                </v-btn>
                                <v-btn color="error" variant="flat" @click="deleteuser(item.id)">
                                  Delete
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-row>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template> </v-list-item><br />
              <v-divider :thickness="3"></v-divider>
              <v-container>
                <v-sheet border="">
                  <h3>
                    Fristname : {{ item.data.fristname }} <br />
                    LastName : {{ item.data.lastname }}
                  </h3>
                  Middle : {{ item.data.middle }} <br />
                  อายุ : {{ item.data.age }}

                  เบอร์โทรติดต่อ :{{ item.data.phone }}
                </v-sheet></v-container>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <button @click="deleteuser(item.id)">delete</button>
    </ul>
  </div>
</template>



<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, deleteUser } from "firebase/auth";
import {
  collection,
  /*   setDoc, */
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { db } from "../main";
import router from "../router";
onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {

      console.log(user.uid);
      check(user.uid);

      // ...
    } else {
      check(null);
      router.push("/login");

      // ...
    }
  });
});
const dataprofile = ref([]);

async function check(userID) {
  const q = query(collection(db, "users"), where("uid", "==", userID));
  if (q) {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log("ddd" + doc.id, " => ", doc.data());

      const mydata = ref({ id: doc.id, data: doc.data() });
      console.log("data" + mydata.value);
      dataprofile.value.push(mydata.value);
    });
  } else {
    alert("ข้อมูลไม่ถูกต้อง");
    console.log("plese Login");
  }
}

const dataP = ref({
  uid: "",
  fristname: "",
  lastname: "",
  middle: "",
  email: "",
  phone: "",
  sex: "",
  age: "",
});
const dialog = ref(false);
const dialog1 = ref(false);

async function update(data2) {
  console.log("DRIVECAR = " + data2);
  const docRef = doc(db, "users", data2);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.id, docSnap.data());

    /* datat.value = docSnap.data(); */
    dataP.value = docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function confirm(data, bool) {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "users", data), dataP.value);
  dialog.value = bool;
  alert("แก้ไข้ข้อมูลเสร็จสิ้น");
}

function del() {


  const auth = getAuth();
  const user = auth.currentUser;

  deleteUser(user).then(() => {
    alert('ลบสำเร็จ')

    // User deleted.
  }).catch((error) => {
    console.log(error)
    alert("NOOOOOOO")


    // An error ocurred
    // ...
  });
}

async function deleteuser(data1) {
  if (confirm("ยืนยันการยกเลิกรายการ")) {
    await deleteDoc(doc(db, "users", data1));
    router.push('/login')
    del()
    deletedata(data1)
  }
}

async function deletedata(data) {
  if (confirm("ยืนยันการยกเลิกรายการ")) {
    await deleteDoc(doc(db, "DRIVECAR", data));
  }
}
</script>
