<script setup>
import GameList from "@/components/GameList/GameList.vue";
import { useAsylumState } from "@/stores/home";
import { computed } from "vue";

const store = useAsylumState();
const library = computed(() => store.userProfile.library);

</script>
<template>
  <div class="w-full h-full">
    <div v-if="library">
      <GameList :gameList="library" :displayPrice="true" v-if="library.length > 0" />
      <div v-else>
        <img
          src="https://media.tenor.com/RxbXY3mB_KIAAAAi/winnie-the.gif"
          class="w-[300px] h-[300px]"
        />
      </div>
    </div>
    <div class="w-full h-full flex items-center justify-center" v-else>
      <h1 class="text-3xl text-white">Please log in to view your library.</h1>
    </div>
  </div>
</template>
<style lang=""></style>
