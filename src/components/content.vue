<template>
  <v-row no-gutters>
    <v-col cols="12" sm="5">
      <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto"
        elevation="4"
        height="500"
        rounded
        max-width="800"
        color="grey-darken-3"
        width="100%"
      >
        <div>
          <h2 class="text-h3 font-weight-light text-">Welcome!</h2>
          <br />

          <div class="text-h5 font-weight-smail mb-2">
            CARANT IS READY TRAVAL WITH YOU
          </div>

          <p class="text-body-1 mb-4"></p>

          <v-btn variant="text" color="black" @click="rigis()">Go to Login</v-btn>
        </div>
      </v-sheet> </v-col
    ><v-col cols="12" sm="7">
      <v-sheet class="">
        <v-img
          :width="auto"
          :height="500"
          aspect-ratio="4/3"
          cover
          src="https://toyotaassets.scene7.com/is/image/toyota/SIE_MY22_0004_V001_1x1?fmt=jpg&fit=crop&resMode=bisharp&wid=700"
        ></v-img>
      </v-sheet>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="12" sm="7">
      <v-sheet class="">
        <v-img
          :width="auto"
          :height="500"
          aspect-ratio="4/3"
          cover
          src="https://hips.hearstapps.com/hmg-prod/images/vf-8-ce-02-64024a50219a0.jpg?crop=1.00xw:0.847xh;0,0&resize=1200:*"
          >"></v-img
        >
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="5">
      <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto"
        elevation="4"
        height="500"
        rounded
        max-width="800"
        color="grey-darken-3"
        width="100%"
      >
        <div>
          <h2 class="text-h3 font-weight-light text-">NEWS!</h2>
          <br />

          <div class="text-h5 font-weight-smail mb-2">
            VinFast Delivers First VF8 City Editions to U.S. Customers
          </div>

          <p class="text-body-1 mb-4">
            The Vietnamese manufacturer delivered its first 45 City VF8 City Edition
            electric SUVs to customers in California.
          </p>

          <v-btn variant="text" color="black" @click="rev()">Go to Reserve</v-btn>
        </div>
      </v-sheet>
    </v-col>
  </v-row>

  <v-row no-gutters>
    <v-col cols="12" sm="5">
      <v-sheet
        class="d-flex align-center justify-center flex-wrap text-center mx-auto"
        elevation="4"
        height="500"
        rounded
        max-width="800"
        color="grey-darken-3"
        width="100%"
      >
        <div>
          <h2 class="text-h3 font-weight-light text-">NEW CAR!!!</h2>
          <br />

          <div class="text-h5 font-weight-smail mb-2">
            Mitsubishi Xpander Cross 2023-2024 ราคา มิตซูบิชิ เอ็กซ์แพนเดอร์ ครอส
            ตารางผ่อน-ดาวน์
          </div>

          <p class="text-body-1 mb-4">
            17 ก.พ. 66 – มิตซูบิชิ เปิดตัว มิตซูบิชิ เอ็กซ์แพนเดอร์ ครอส ใหม่! <br />
            รถยนต์เอสยูวี 7 ที่นั่ง โดดเด่นด้วยรูปลักษณ์ใหม่สไตล์โฉบเฉี่ยว
            สะท้อนความหรูหราผสานดีไซน์สปอร์ตทั้งภายนอกและภายใน
          </p>

          <v-btn variant="text" color="black" @click="rigis()">LOGIN/REGISTER</v-btn>
        </div>
      </v-sheet> </v-col
    ><v-col cols="12" sm="7">
      <v-sheet class="">
        <v-img
          :width="auto"
          :height="500"
          aspect-ratio="4/3"
          cover
          src="https://www.9carthai.com/wp-content/uploads/2023/01/New-Mitsubishi-Xpander-Cross-2023-Action.jpg"
        ></v-img>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function rigis() {
  router.push("/login");
}
function rev() {
  router.push("/about/");
}
</script>
