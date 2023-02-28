<script>
import GameList from "../components/GameList.vue";
import SearchComponent from "../components/SearchComponent.vue";
import SkeletonLoading from "../components/SkeletonLoading.vue";
import { useAsylumState } from "../stores/home";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    GameList,
    SearchComponent,
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
    <search-component />
    <div
      class="flex items-center justify-center flex-col lg:justify-start lg:flex-row"
    >
      <div
        class="swiper-hero cursor-pointer w-full h-[200px] md:h-[350px] lg:w-[670px] lg:h-[350px] my-3 lg:mr-3 rounded-lg overflow-hidden"
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
        <SkeletonLoading
          v-else
          height="100%"
          width="100%"
          borderRadius="10px"
          times="1"
        />
      </div>
      <div
        class="w-full h-[200px] md:h-[350px] lg:w-[480px] lg:h-[350px] hover:ring ring-orange-400 rounded-lg overflow-hidden cursor-pointer"
        @click="() => $router.push({ path: '/search/sale', replace: true })"
      >
        <figure v-if="Object.keys(gameData).length > 0">
          <img src="/src/assets/images/sale.jpg" />
        </figure>
        <SkeletonLoading
          v-else
          height="100%"
          width="100%"
          borderRadius="10px"
          times="1"
        />
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

.game-item {
  cursor: pointer;
  overflow: hidden;
}

.game-item .game-details {
  position: absolute;
  z-index: 1;
  bottom: -20%;
  color: white;
  transition: all 200ms ease;
}

.game-item:hover::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.226);
}

.game-item figure {
  transition: all 200ms ease;
}

.game-item:hover figure {
  filter: blur(5px);
  scale: 1.2;
}

.game-item:hover .game-details {
  bottom: 5%;
}

@media screen and (max-width: 1024px) {
  .game-item .game-details {
    bottom: 1%;
    font-weight: bolder;
  }
}
</style>
