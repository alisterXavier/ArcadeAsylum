<script setup>
import { useAsylumState } from "@/stores/home";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import GameList from "../components/GameList.vue";

const route = useRoute();
var id = "";
const DataStore = useAsylumState();
const search = computed(() => DataStore.getGenre(id));

watch(
  route,
  (genre) => {
    id = genre.params.id;
  },
  { immediate: true, deep: true }
);
</script>
<template lang="">
  <div class="w-full h-full">
    <h1 class="text-3xl text-white">{{ id }}</h1>
      <GameList :gameList="search" />
  </div>
</template>
<style lang=""></style>
