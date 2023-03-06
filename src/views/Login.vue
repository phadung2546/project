<template>
  <br />
  <br />
  <v-container>
    <v-row no-gutters>
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
                  variant="outlined"
                >
                  <span>
                    <v-avatar color="info" size="60">
                      <v-icon size="large" icon="mdi-account-circle"></v-icon>
                    </v-avatar> </span
                  ><br /><br /><br />
                  LOGIN
                </v-card-text>
                <v-card-text class="my-4 text-center text-h6">
                  Don't have your CARNAT account ?<v-list-item
                    color="blue"
                    class="text-decoration-underline"
                    title="Risgister"
                    value="about"
                    variant="plain"
                    @click="page()"
                  ></v-list-item>
                </v-card-text>
                <div>
                  <v-form fast-fail @submit.prevent>
                    <p>
                      <v-responsive class="mx-auto" max-width="344">
                        <v-text-field
                          label="Email"
                          type="email"
                          hide-details="auto"
                          :rules="rules1"
                          v-model="email"
                          variant="outlined"
                          color="balck"
                        ></v-text-field>
                      </v-responsive>
                    </p>
                    <br />
                    <p>
                      <v-responsive class="mx-auto" max-width="344">
                        <v-text-field
                          label="Password"
                          hide-details="auto"
                          v-model="password"
                          variant="outlined"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-2"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-responsive>
                    </p>
                    <br />
                    <center>
                      <v-btn rounded="pill" color="grey-darken-3">
                        <button @click="Login()">Login</button>
                      </v-btn>
                    </center>
                  </v-form>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row> </v-col
      ><v-col cols="12" sm="7">
        <v-sheet class="">
          <v-img
            :width="auto"
            :height="600"
            aspect-ratio="4/3"
            cover
            src="https://toyotaassets.scene7.com/is/image/toyota/SIE_MY22_0004_V001_1x1?fmt=jpg&fit=crop&resMode=bisharp&wid=700"
          ></v-img>
        </v-sheet>
      </v-col> </v-row
  ></v-container>

  <br /><br />
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("");
const password = ref("");
const show1 = ref(false);
const rules1 = [
  (value) => {
    if (value) return true;

    return "โปรดระบุ E-mail";
  },
];

const rules = ref({
  required: (value) => !!value || "โปรดระบุรหัสผ่าน",
  min: (v) => v.length >= 8 || "ตัวอักษรอย่างน้อย 8 ตัว",
  emailMatch: () => `The email and password you entered don't match`,
});

const Login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("เข้าสู่ระบบสำเร็จ");
      console.log("home" + user);
      router.push("/home");

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      alert("โปรดลองอีกครั้ง !!!");
    });
};

function page() {
  router.push("/rigis");
}

const signInWithGoogle = () => {};
</script>
