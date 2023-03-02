<script>
import GameList from "@/components/GameList/GameList.vue";
import SkeletonLoading from "../components/SkeletonLoading.vue";
import { useAsylumState } from "../stores/home";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    GameList,
    Swiper,
    SwiperSlide,
    SkeletonLoading,
  },
  data() {
    return {
      store: useAsylumState(),
    };
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  computed: {
    gameData: function () {
      return this.store.HomeState;
    },
  },
  methods: {
    handleSelectGame(data) {
      this.$router.push({ path: `/game/${data.id}`, replace: true });
    },
  },
  mounted() {
    document.querySelector(".nav")?.classList.add("shadow");
    document.querySelector(".nav")?.classList.remove("bg-gradient");
  },
};
</script>

<template>
  <div class="w-full h-full">
    <div
      class="flex items-center justify-center flex-col lg:justify-start lg:flex-row lg:h-[50vh] py-5"
    >
      <div
        class="swiper-hero cursor-pointer w-full h-[200px] md:h-[350px] lg:w-[50%] lg:h-full my-3 lg:mr-3 rounded-lg overflow-hidden"
      >
        <swiper
          :slides-per-view="1"
          :modules="modules"
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          v-if="Object.keys(gameData).length > 0"
        >
          <swiper-slide
            v-for="d in gameData.slice(0, 3)"
            :key="d.id"
            @click="() => handleSelectGame(d)"
          >
            <figure> 
              <img :src="d.imageBackground" />
            </figure>
          </swiper-slide>
        </swiper>
        <SkeletonLoading v-else classList="w-full h-full" times="1" />
      </div>
      <div
        class="w-full h-[200px] md:h-[350px] lg:w-[50%] lg:h-full hover:ring ring-orange-400 rounded-lg overflow-hidden cursor-pointer"
        @click="() => $router.push({ path: '/search/sale', replace: true })"
      >
        <figure v-if="Object.keys(gameData).length > 0">
          <img src="/src/assets/images/sale.jpg" />
        </figure>
        <SkeletonLoading v-else classList="w-full h-full" times="1" />
      </div>
    </div>
    <div class="home justify-center lg:justify-start mb-16 lg:m-0">
      <GameList v-bind:gameList="gameData" />
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-wrap: wrap;
}
</style>
