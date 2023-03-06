<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-sheet class="ma-2 pa-2 align-center justify-center">
            <br /><br /><br /><br />

            <v-toolbar color="grey-darken-3" title="ADDRESS"></v-toolbar>
            <br />
            <v-sheet
              :rounded="rounded"
              class="mx-auto"
              elevation="12"
              color="black"
              height="auto"
              width="auto"
            >
              <v-list-item
                prepend-icon="mdi-email"
                title="caRent44@gmail.com"
                value="about"
                variant="plain"
              ></v-list-item>
            </v-sheet>
            <br />

            <v-sheet
              :rounded="rounded"
              class="mx-auto"
              elevation="12"
              color="black"
              height="auto"
              width="auto"
            >
              <v-list-item
                prepend-icon="mdi-phone"
                title="44444"
                value="about"
                variant="plain"
              ></v-list-item> </v-sheet
            ><br />

            <v-sheet
              :rounded="rounded"
              class="mx-auto"
              elevation="12"
              color="black"
              height="auto"
              width="auto"
            >
              <v-list-item
                prepend-icon="mdi-facebook"
                title="CARENT"
                value="about"
                variant="plain"
              ></v-list-item> </v-sheet
            ><br />

            <v-sheet
              :rounded="rounded"
              class="mx-auto"
              elevation="12"
              color="black"
              height="auto"
              width="auto"
            >
              <v-list-item
                prepend-icon="mdi-instagram"
                title="CARENT"
                value="about"
                variant="plain"
              ></v-list-item> </v-sheet
            ><br />
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="6">
          <v-sheet class="ma-2 pa-2">
            <v-card width="auto" height="auto">
              <v-toolbar color="grey-darken-3" title="Contact US"></v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Name"
                  variant="underlined "
                  v-model="contact.name"
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  variant="underlined"
                  v-model="contact.email"
                ></v-text-field>
                <v-text-field
                  label="Phone"
                  variant="underlined"
                  v-model="contact.phone"
                ></v-text-field>
                <v-textarea
                  label="Detail"
                  variant="underlined"
                  v-model="contact.detail"
                ></v-textarea>
              </v-card-text>
              <center>
                <v-btn variant="outlined" @click="addcontact()"> SEND </v-btn>
              </center>
              <br />
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";

const contact = ref({
  name: "",
  email: "",
  phone: "",
  detail: "",
});

async function addcontact() {
  try {
    const docRef = await addDoc(collection(db, "contact"), contact.value);
    alert("Succeed");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>
