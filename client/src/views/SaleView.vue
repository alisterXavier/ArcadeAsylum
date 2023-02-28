<script setup>
import { useAsylumState } from "@/stores/home";
import GameList from "@/components/GameList.vue";

const store = useAsylumState();
const sale = store.getSale();
</script>
<template lang="">
  <div>
    <h1 class="text-3xl text-white">Games on sale</h1>
    <GameList :gameList="sale" />
  </div>
</template>
<style lang=""></style>
