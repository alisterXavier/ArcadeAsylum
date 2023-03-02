<script setup>
import { useAsylumState } from "@/stores/home";
import GameList from "@/components/GameList/GameList.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useAsylumState();
const search = computed(() => store.getSearch(route.params.id.toLowerCase()));
</script>
<template lang="">
  <div class="w-full h-full">
    <h1 class="text-3xl my-5 text-white">Search results for {{ route.params.id }}:</h1>
    <GameList :gameList="search" />
  </div>
</template>
<style lang=""></style>
