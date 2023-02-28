<script>
import SkeletonLoading from "./SkeletonLoading.vue";
export default {
  name: "GameList",
  props: ["gameList"],
  components: {
    SkeletonLoading,
  },
  methods: {
    handleSelectGame(data) {
      this.$router.push({ path: `/game/${data.id}`, replace: true });
    },
  },
};
</script>
<template lang="">
  <div class="flex flex-wrap">
    <div class="flex flex-wrap" v-if="gameList.length > 0">
      <div
        class="game-item relative rounded-lg w-[150px] h-[200px] md:w-[230px] md:h-[300px] my-2 mx-[5px] lg:my-[15px] lg:mr-[15px] lg:w-[215px] lg:h-[280px]"
        v-for="d in this.gameList"
        :key="d.Id"
        @click="() => handleSelectGame(d)"
      >
        <div class="w-full h-full">
          <figure class="w-full h-full">
            <img class="w-full h-full" :src="d.imageCover" />
          </figure>
          <div class="justify-between game-details w-full p-5">
            <p class="text-sm invisible lg:visible">
              {{ d.title }}
            </p>
            <div class="flex text-sm">
              <p
                class="mr-2 relative"
                v-if="d.discount"
                :class="d.discount && 'price font-bold'"
              >
                -{{ d.discount }}%
              </p>
              <p>
                {{ d.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SkeletonLoading
      v-else
      marginLeft="5px"
      marginRight="15px"
      height="300px"
      width="215px"
      borderRadius="10px"
      times="5"
    />
  </div>
</template>
<style>
.game-details .price::after {
  content: "";
  position: absolute;
  top: 45%;
  left: 0%;
  width: 110%;
  height: 2px;
  rotate: 30deg;
  background-color: red;
}
</style>
