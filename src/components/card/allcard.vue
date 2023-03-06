<template>
    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-2">
            <card1 />
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-2">
            <card2> </card2>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-2">
            <card3 />
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-2">
            <card4 />
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>
import card1 from "./card1.vue"
import card2 from "./card2.vue"
import card3 from "./card3.vue"
import card4 from "./card4.vue"
</script>