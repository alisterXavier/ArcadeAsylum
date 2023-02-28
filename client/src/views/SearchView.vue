<script setup>
import { useAsylumState } from "@/stores/home";
import GameList from "../components/GameList.vue";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

var id = "";
const route = useRoute();
const store = useAsylumState();
const search = computed(() => store.getSearch(id));

watch(
  route,
  () => {
    id = route.params.id;
  },
  { immediate: true, deep: true }
);
</script>
<template lang="">
  <div class="w-full h-full">
    <h1 class="text-3xl text-white">Search results for {{ id }}:</h1>
    <GameList :gameList="search" />
  </div>
</template>
<style lang=""></style>
