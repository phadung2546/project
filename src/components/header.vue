<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://toyotaassets.scene7.com/is/image/toyota/MUL_MY23_0023_V006_4x3_771Dj68mUogIwIiZ?fmt=jpeg&fit=crop&qlt=90&wid=1024",
        },
        {
          src: "https://i.pinimg.com/564x/b0/94/34/b094346ba27243d984a8ebf326a08b48.jpg",
        },
        {
          src:
            "https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/334887018_1329746120918092_1339103535478816630_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGkvHzToYztDlV6tzXTleHwrEbyphOeAiSsRvKmE54CJGuoCUYy1bwBY3IQrbaT9GKKdBJMfzMre8PSAowaTzHz&_nc_ohc=cudIbt05YlwAX_iKmo1&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdS7prCI2nFov8K-AgJwQmP7rDveF6ccfQhDzHRwRJG1vQ&oe=642B0E23",
        },
        {
          src:
            "https://toyotaassets.scene7.com/is/image/toyota/HLD_MY23_0003_V001_desktop?fmt=jpeg&fit=crop&wid=1439",
        },
      ],
    };
  },
};
</script>
<style></style>
