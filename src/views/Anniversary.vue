<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { ref, onMounted } from 'vue';

const isLoading = ref(false);
const modules = [EffectCards];

defineOptions({
  components: {
    Swiper,
    SwiperSlide,
  }
})
</script>

<template>
  <div v-if='isLoading'></div>
  <div v-else>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img src="../assets/IMG_8370.png" /><h1>ตั้งแต่เด็กกางร่มในวันนั้น</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_8672.png" /><h1>จนได้ไปเดทกันครั้งแรก</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_1111.png" /><h1>เราก็ได้เจอกันเรื่อย ๆ</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_8798.png" /><h1>ไปชอปปิ้ง</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9812.png" /><h1>ไปคาเฟ่</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_3061.png" /><h1>ไปถ่ายรูป</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_2222.png" /><h1>ไปทำกิจกรรม</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9585.png" /><h1>นั่งรอ</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9636.png" /><h1>ขึ้นเครื่องบิน</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9122.png" /><h1>ไปร้านเหล้า</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_0905.png" /><h1>มาช่วยงานด้วย น่ารักที่สุด</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_5586.png" /><h1>จะวันเกิดแก หรือวันไหน ๆ</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9161.png" /><h1>จะวันที่เหนื่อยจากการทำงาน</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_7094.png" /><h1>จะโมโหหิวเป็นหมูเด้ง</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9382.png" /><h1>จะนอยหน้าเป็นตูด</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_2097.png" /><h1>ชั้นก็จะอยู่กับแก</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_9215.png" /><h1>เราจะเดินไปด้วยกัน</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_7424.png" /><h1>ไม่ว่าทางข้างหน้าจะเป็นยังไง</h1></swiper-slide>
      <swiper-slide><img src="../assets/IMG_4733.png" /><h1>ชั้นจะดูแลและทำทุกอย่างให้ดีที่สุด<br>อยู่ด้วยกันไปนาน ๆ เลยนะ มินมิน</h1></swiper-slide>
    </swiper>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sriracha&display=swap');

#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

html,
body {
  position: relative;
  height: 100%;
}

.swiper {
  width: min(66vh, 66vw);
  height: min(88vh, 88vw);
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  
  font-weight: bold;
  color: #000;
  background-color: #fff;
}

.swiper-slide img {
  display: block;
  width: 100%;
  z-index: 0;
}

.swiper-slide h1 {
  font-family: "Kanit", sans-serif;
  background-color: #fff;
  position: absolute;
  font-size: .9em;
  bottom: 3%;
  left: 8%;
  Padding: 2%
}

</style>