<template>
  <div class="flex flex-col items-center p-24 w-full">
    <img src="../image/frametitle.png" alt="" />
    <p class="text-white font-black text-sm text-center mt-16">
      各路廠商強強聯手 <br />
      共同設計出接地氣的網頁互動挑戰關卡
    </p>
    <div class="flex mt-16 gap-x-8">
      <!-- <div
        v-for="item in info"
        :key="item.weeks"
        class="flex flex-col items-center p-10 w-60 h-72 bg-gradient-to-b from-secondary-200 to-secondary-300 rounded-3xl"
      >
        <span class="text-white text-lg">WEEK {{ item.weeks }}</span>
        <img src="../image/lock.png" alt="" class="w-40" />
      </div> -->

      <div
        v-for="item in info"
        :key="item.weeks"
        class="flex flex-col items-center justify-between p-6 h-72 min-w-[260px] bg-white rounded-3xl"
      >
        <span
          class="text-black bg-accent text-xs font-semibold rounded-lg w-30 h-6 m-2"
          ># {{ item.tag }}
        </span>
        <span class="text-secondary-300 text-sm font-bold">{{
          item.title
        }}</span>
        <span class="text-secondary-300 text-s">{{ item.subTitle }}</span>
        <img :src="item.image" alt="" class="w-40" />
        <span class="text-secondary-200 text-xs">WEEK {{ item.weeks }}</span>
        <span class="text-secondary-300 text-xs font-semibold"
          >查看關卡細節</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const weeks = ref(["WEEK 1", "WEEK 2", "WEEK 3"]);

const info = ref([
  {
    tag: "板塊設計",
    title: "The F2E 活動網站設計",
    subTitle: "視覺滾動",
    image: "src/image/dashboardsm.png",
    weeks: "1",
  },
  {
    tag: "凱鈿行動科技",
    title: "今晚，我想來點點簽",
    subTitle: "CANVAS",
    image: "src/image/pen.png",
    weeks: "2",
  },
  {
    tag: "鈦坦科技",
    title: "Scrum 新手村",
    subTitle: "JS Draggable",
    image: "src/image/arrow.png",
    weeks: "3",
  },
]);
</script>

<style lang="scss" scoped></style>
