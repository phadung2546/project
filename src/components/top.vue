<template>
  <v-card color="grey-darken-4"
    ><br />
    <h2 class="text-h4 text-center font-weight-light text-orange">
      TOP 3 <br />CARENT IN FEBRUARY
    </h2>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="4">
          <v-sheet class="ma-2 pa-2">
            <div>
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="mx-auto"
                  color="grey-lighten-4"
                  max-width="600"
                  v-bind="props"
                >
                  <v-img
                    :aspect-ratio="16 / 9"
                    cover
                    src="https://budget.co.th/images/CarTypes/Budget_TH_Fleet_CCAR.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                        style="height: 100%"
                      >
                        1
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card color="orange-darken-2" height="20"></v-card>

                  <v-card-text class="pt-6">
                    <h3 class="text-h5 text-center font-weight-light text-black mb-2">
                      Toyota Altis 1.6
                    </h3>
                    <div class="font-weight-light text-center text-grey text-h6 mb-2">
                      "model": "Compact"
                    </div>

                    <div class="font-weight-light text-h6 mb-2">
                      <div class="text-center">
                        <v-rating v-model="rating" readonly></v-rating>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet class="ma-2 pa-2">
            <div>
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="mx-auto"
                  color="grey-lighten-4"
                  max-width="600"
                  v-bind="props"
                >
                  <v-img
                    :aspect-ratio="16 / 9"
                    cover
                    src="https://budget.co.th/images/CarTypes/Budget_TH_Fleet_CPMR.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                        style="height: 100%"
                      >
                        2
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card color="orange-darken-2" height="20"></v-card>

                  <v-card-text class="pt-6">
                    <h3 class="text-h5 text-center font-weight-light text-black mb-2">
                      Isuzu Dmax Extra Cab
                    </h3>
                    <div class="font-weight-light text-center text-grey text-h6 mb-2">
                      model: Pick Up Truck
                    </div>

                    <div class="font-weight-light text-h6 mb-2">
                      <div class="text-center">
                        <v-rating v-model="rating" readonly></v-rating>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="4">
          <v-sheet class="ma-2 pa-2">
            <div>
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="mx-auto"
                  color="grey-lighten-4"
                  max-width="600"
                  v-bind="props"
                >
                  <v-img
                    :aspect-ratio="16 / 9"
                    cover
                    src="https://www.kinto-th.com/_image.aspx/kbvbsq4BNI2G22r7iDwusTUzO-zVgi2YS5AG-9zEd9A=/C-HR_black-01.png21922525"
                  >
                    <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                        style="height: 100%"
                      >
                        3
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card color="orange-darken-2" height="20"></v-card>

                  <v-card-text class="pt-6">
                    <h3 class="text-h5 text-center font-weight-light text-black mb-2">
                      C-HR HV
                    </h3>
                    <div class="font-weight-light text-center text-grey text-h6 mb-2">
                      model: Premium Safety
                    </div>

                    <div class="font-weight-light text-h6 mb-2">
                      <div class="text-center">
                        <v-rating v-model="rating" readonly></v-rating>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </v-sheet>
        </v-col>
      </v-row> </v-container
    ><br />
  </v-card>
</template>
<script setup>
import { ref } from "vue";
const rating = ref(5);
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
