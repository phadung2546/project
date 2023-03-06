<template>
  <v-card color="transparent justify-center align-center "
    ><br /><br />
    <h2 class="text-h4 text-center font-weight-regulargrey-lighten-1">คำถามที่พบบ่อย</h2>
    <v-tabs v-model="tab" bg-color="grey-darken-4">
      <center><v-tab value="one">ทั่วไป</v-tab></center>
      <v-tab value="two">การจอง</v-tab>
      <v-tab value="three">วิธีชำระเงิน</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-container>
            <!-- <div class="text-subtitle-2 mt-4 mb-2">CARant คืออะไร</div> -->

            <v-expansion-panels variant="popout" class="my-4" color="grey-darken-1">
              <v-expansion-panel
                title="CARant คืออะไร"
                text="CARENT คือแพลตฟอร์มสำหรับให้บริการรถเช่า ที่รวบรวมรถยนต์ไหลากหลายแบรนด์ให้คุณสามารถเลือกไปขับได้นานเท่าที่คุณต้องการ"
              ></v-expansion-panel>

              <v-expansion-panel
                title="พื้นที่ให้บริการ รับ - ส่งรถ ของ CARANT ครอบคลุมที่ไหนบ้าง"
                text="สำหรับการรับ - ส่งรถ พื้นที่ให้บริการอยู่ภาคเหนือ ได้แก่ เชียงใหม่ เชียงราย ลำพูน ลำปาง และพะเยา "
              ></v-expansion-panel>
              <v-expansion-panel
                title="พื้นที่บริการในกรณีเกิดเหตุฉุกเฉิน 24 ชั่วโมง ครอบคลุมที่ไหนบ้าง"
                text="เชียงใหม่ - ลำพูน"
              ></v-expansion-panel> </v-expansion-panels
          ></v-container>
        </v-window-item>

        <v-window-item value="two">
          <v-expansion-panels variant="popout" class="my-4" color="grey-darken-1">
            <v-expansion-panel
              title="มีแผนแบบใดให้เลือกบ้าง"
              text="เรามีแผนแบบ 3 วัน และ  1 สัปดาห์"
            ></v-expansion-panel>

            <v-expansion-panel
              title="สามารถยกเลิกการจองก่อนการส่งมอบรถได้หรือไม่"
              text="คุณสามารถทำการยกเลิกการจองได้ โดยมีเงื่อนไข 
                 คือจองแพ็กเกจ 7 วัน"
            ></v-expansion-panel>
            <v-expansion-panel
              title="กรณีใช้บริการ รถ TOYOTA สามารถนำรถเข้าศูนย์บริการ ได้ที่ใดบ้าง"
              text="ลูกค้าสามารถเข้าศูนย์บริการมาตรฐานโตโยต้าทั่วประเทศ"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-window-item>

        <v-window-item value="three" color="black">
          <v-container>
            <v-expansion-panels variant="popout" class="my-4" color="grey-darken-1">
              <v-expansion-panel
                title="สามารถชำระค่าบริการล่วงหน้าได้หรือไม่"
                text="ลูกค้าสามารถชำระค่าบริการล่วงหน้าได้ผ่านช่องทางการชำระเดิม"
              ></v-expansion-panel>
              <v-expansion-panel
                title="การคำนวณค่าบริการในแต่ละครั้ง"
                text="1. รุ่นรถยนต์  
                                  2. ระยะเวลาในการขอใช้บริการ
                                3. และเงื่อนไขอื่นๆ ที่ลูกค้าเลือก"
              >
              </v-expansion-panel> </v-expansion-panels
          ></v-container>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

  <br /><br />

  <v-container>
    <div></div>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
const tab = ref(null);
</script>
