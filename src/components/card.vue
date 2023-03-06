<template>
  <div
    class="pa-4 bg-yellow-darken-1 text-h4 text-center rounded-t-xl width=200px"
    width="300"
  >
    เลือกรถของคุณ
  </div>
  <v-card color="black"
    ><br /><br />
    <v-row no-gutters>
      <v-col v-for="n in data" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2" color="black">
          <div class="container" color="dark">
            <div class="box" cols="12" sm="3" align-center>
              <v-flex xs12 md6>
                <div class="caption grey--text text-h5 text-center">{{ n.model }}</div>
                <div class="caption grey--text text-center">{{ n.barnd }}</div>
              </v-flex>

              <img :src="n.imag" :height="150" title="dkdkdk" srcset="" />
              <v-card color="yellow-darken-1" height="10"></v-card>

              <v-container>
                <v-card class="pa-3" color="black">
                  <v-layout row wrap>
                    <v-flex xs12 md6>
                      <div class="caption grey--text">
                        <v-icon size="large" color="black--darken-2">
                          mdi-car-door
                        </v-icon>
                        : {{ n.door }}
                      </div>
                      <div class="caption grey--text">
                        <v-icon size="large" color="black--darken-2">
                          mdi-account
                        </v-icon>
                        :
                        {{ n.person1 }}
                      </div>
                      <div class="caption grey--text">
                        <v-icon size="large" color="black--darken-2">
                          mdi-palette
                        </v-icon>
                        : {{ n.color }}
                      </div>
                      <div class="caption grey--text">
                        <v-icon size="large" color="black--darken-2">
                          mdi-car-cog
                        </v-icon>
                        : {{ n.type }}
                      </div>
                      <div class="caption grey--text">
                        <v-icon size="large" color="black-darken-2">
                          mdi-currency-usd
                        </v-icon>
                        : {{ n.priceDAY }} บาทต่อวัน
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-container>

              <center>
                <v-btn
                  append-icon="mdi-vuetify"
                  variant="outlined"
                  @click="page()"
                  color="yellow-darken-1"
                >
                  reserve
                </v-btn>
              </center>
              <br />
            </div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import data from "../DATA/CAR.json";
import { useRouter } from "vue-router";
const router = useRouter();
function page() {
  router.push("/about");
}
</script>
<style>
.container {
  width: 100%;

  padding: 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.box {
  width: 250px;
  margin: 0 10px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  transition: 1s;
}

.box img {
  display: block;
  width: 100%;
  border-radius: 5px;
}

.box:hover {
  transform: scale(1.2);
  z-index: 2;
}
</style>
