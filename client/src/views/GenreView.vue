<script setup>
import { useAsylumState } from "@/stores/home";
import { computed } from "vue";
import { useRoute } from "vue-router";
import GameList from "@/components/GameList/GameList.vue";

const route = useRoute();
const DataStore = useAsylumState();
const search = computed(() => DataStore.getGenre(route.params.id));
</script>
<template lang="">
  <div class="w-full h-full">
    <h1 class="text-3xl my-5 text-white">{{ route.params.id }}</h1>
      <GameList :gameList="search" />
  </div>
</template>
<style lang=""></style>
