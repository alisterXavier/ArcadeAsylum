<script>
import { useAsylumState } from "../../stores/home";
import SkeletonLoading from "../SkeletonLoading.vue";
import GameItem from "./GameItem.vue";
export default {
  name: "GameList",
  props: ["gameList", "displayPrice"],
  data() {
    return {
      store: useAsylumState(),
    };
  },
  components: {
    SkeletonLoading,
    GameItem
  },
  methods: {
    handleSelectGame(data) {
      this.$router.push({ path: `/game/${data.id}`});
    },
  },
};
</script>
<template lang="">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap w-full justify-center lg:justify-start" v-if="Object.keys(store.HomeState).length > 0">
      <div
        class="game-item relative list-shadow rounded-md w-[45%] h-[250px] md:w-[30%] md:h-[300px] my-2 mr-[9px] lg:my-[15px] lg:w-[230px] lg:h-[380px]"
        v-for="d in this.gameList"
        :key="d.id"
        @click="() => handleSelectGame(d)"
      >
        <GameItem :game="d" :displayPrice="displayPrice"/>
      </div>
    </div>
    <SkeletonLoading
      v-else
      classList="rounded-lg w-[150px] h-[200px] md:w-[230px] md:h-[300px] my-2 mx-[5px] lg:my-[15px] lg:mr-[15px] lg:w-[215px] lg:h-[280px]"
      times="5"
    />
  </div>
</template>
<style>
</style>
