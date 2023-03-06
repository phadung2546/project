<script setup>
import Herder1 from "../components/header.vue";
import content from "../components/content.vue";
import ask from "../components/ask.vue";
</script>

<template>
  <main>
    <v-card color="black">
      <Herder1 />
      <v-parallax
        height="auto"
        src="https://cartype.com/pics/9853/full/audi_q5_13_24.jpg"
        title="ddkdkdkdkdkdkd"
      ></v-parallax>
      <content />
    </v-card>
    <v-card color="grey-darken-4">
      <ask />
    </v-card>
  </main>
</template>
<script setup></script>
<style>
.item {
  transition: 0.35%;
  cursor: pointer;
}

.container:hover > :not(:hover) {
  opacity: 0.4;
  transform: scale(0.9);
}
</style>
