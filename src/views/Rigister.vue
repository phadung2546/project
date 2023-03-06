<template>
  <br /><br />
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="7">
        <v-sheet class="">
          <v-img
            :width="auto"
            :height="600"
            aspect-ratio="4/3"
            cover
            src="https://th.bing.com/th/id/R.b61116e13c95641ea2ff873bb306d286?rik=5xbL2xM8idKbAA&pid=ImgRaw&r=0"
            >"></v-img
          >
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-hover v-slot="{ isHovering, props }" disabled>
              <v-card
                :elevation="isHovering ? 12 : 2"
                class="mx-auto"
                height="600"
                max-width="400"
                v-bind="props"
              >
                <v-card-text
                  class="my-4 text-center font-weight-light text-h4 text-md-h4 text-lg-h3"
                >
                  <span>
                    <v-avatar color="info" size="60">
                      <v-icon size="large" icon="mdi-account-circle"></v-icon>
                    </v-avatar> </span
                  ><br /><br /><br />
                  Create CARANT <br />
                  <br />
                  Account
                </v-card-text>
                <div>
                  <v-form fast-fail @submit.prevent>
                    <v-responsive class="mx-auto" max-width="344">
                      <v-text-field
                        label="Email"
                        :type="email"
                        variant="outlined"
                        :rules="rules"
                        maxlength="30"
                        hide-details="auto"
                        v-model="email"
                      ></v-text-field>
                    </v-responsive>
                    <br />
                    <p>
                      <v-responsive class="mx-auto" max-width="344">
                        <v-text-field
                          label="Password"
                          variant="outlined"
                          maxlength="30"
                          hide-details="auto"
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules2.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-2"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-checkbox
                          class="justify-content text-center"
                          v-model="checkbox"
                          :rules="[(v) => !!v || 'โปรกคลิกเพื่อกดยืนยันการสมัคร']"
                          label="ยินยอมให้เก็บข้อมูลส่วนตัว"
                          required
                        >
                        </v-checkbox>
                      </v-responsive>
                    </p>
                    <!--  <center><v-btn rounded="pill" color="secondary">
                    <button @click="register()">Register</button>
                  </v-btn></center> --><br />
                    <v-row justify="center">
                      <v-btn
                        type="submit"
                        rounded="pill"
                        color="grey-darken-3"
                        @click="register()"
                      >
                        สมัคร
                      </v-btn>
                    </v-row>
                  </v-form>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row></v-container
  >

  <br />
</template>
<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";
/* import { collection, addDoc, } from "firebase/firestore";
import { db } from "../main";
import { async } from "@firebase/util"; */

const router = useRouter();
const email = ref("");
const password = ref("");

const checkbox = ref(false);
const rules = [
  (value) => {
    if (value) return true;

    return "You must enter a first name.";
  },
];

const dialog = ref(false);
const show1 = ref(false);
const rules2 = ref({
  required: (value) => !!value || "โปรดระบุรหัสผ่าน",
  min: (v) => v.length >= 8 || "ตัวอักษรอย่างน้อย 8 ตัว",
  emailMatch: () => `The email and password you entered don't match`,
});

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Successfully Register");
      console.log(user);
      router.push("/Login");
      addprofile(user);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);

      // ..
    });
};

async function addprofile(user1) {
  try {
    const contact = ref({
      uid:user1.uid,
      fristname: "",
      lastname: "",
      middle: "",
      email: user1.email,
      phone: "",
      sex: "",
      age: "",
    });
    const docRef = await addDoc(collection(db, "users"), contact.value);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

/* 
const signInWithGoogle = () => { }; */
</script>
