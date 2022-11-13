<template>
  <div class="flex items-center h-24 p-8">
    <Logo class="flex h-full items-center" />
    <ul class="flex justify-end items-center text-gray-400 grow h-full">
      <li class="mr-8 li">
        <a href="">關卡資訊</a>
      </li>
      <li class="mr-8 li"><a href="">活動說明</a></li>
      <li class="mr-8 li"><a href="">攻略資源</a></li>
      <li class="mr-8 li"><a href="">求職專區</a></li>
      <button
        class="h-10 border rounded-full w-20 hover:border-accent hover:text-accent"
      >
        <a href="">登入</a>
      </button>
    </ul>
  </div>
</template>

<script setup>
import Logo from "../image/Logo.svg";
</script>

<style lang="scss" scoped></style>
