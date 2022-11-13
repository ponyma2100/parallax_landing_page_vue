<template>
  <section class="flex flex-col justify-center items-center h-full">
    <div class="flex justify-center items-center mb-12">
      <img src="../image/code.png" alt="" />
      <img src="../image/title.png" alt="" />
      <img src="../image/illustration01.png" alt="" />
    </div>
    <div class="flex justify-center items-center w-full">
      <img src="../image/illustration02.png" alt="" />
      <div class="flex flex-col items-center p-10">
        <p class="text-white font-black text-lg tracking-[1em] mb-20">
          互動式網頁設計
        </p>
        <button
          class="bg-secondary-100 w-[240px] rounded-full font-semibold h-20"
        >
          立即報名
        </button>
      </div>
      <img src="../image/dashboard.png" alt="" />
    </div>
    <div>
      <img src="../image/joinus.png" alt="" />
    </div>
    <Question class="mt-10" />
    <Interactive class="mt-10" />
    <Info />
    <Activity />
    <Award />
  </section>
</template>

<script setup>
import Question from "../components/Question.vue";
import Interactive from "../components/Interactive.vue";
import Info from "../components/Info.vue";
import Activity from "../components/Activity.vue";
import Award from "../components/Award.vue";
</script>

<style lang="scss" scoped></style>
