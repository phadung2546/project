<template>
  <div>
    <input type="text" v-model="email" />
    <button @click="reset()">reset</button>
    <a href="#" onclick="reset()">dddddd</a>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const email = ref();

function reset() {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .value.then(() => {
      // Password reset email sent!
      window.alert("โปรดไปที่อีเมลของคุณ");
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
      window.alert("โปรดไปที่อีเมลขอdsdงคุณ");
      // ..
    });
}
</script>
