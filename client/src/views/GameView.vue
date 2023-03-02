<script>
import { useAsylumState } from "../stores/home";
import { storeToRefs } from "pinia";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

export default {
  components: {
    SkeletonLoading,
  },
  data() {
    return {
      store: useAsylumState(),
      Id: undefined,
      basketStore: {},
    };
  },
  computed: {
    gameData: function () {
      return this.store.HomeState.find(
        (data) => data.id === this.$route.params.id
      );
    },
    inCart: function () {
      return this.store.userProfile.basket.some(
        (value) => value.id === this.$route.params.id
      );
    },
    inLibrary: function () {
      return this.store.userProfile.library.some(
        (value) => value.id === this.$route.params.id
      );
    },
  },
  mounted() {
    this.basketStore = storeToRefs(this.store);
    document.querySelector(".nav")?.classList.remove("shadow");
    document.querySelector(".nav")?.classList.add("bg-glass");
  },
  methods: {
    AddToCart: function () {
      this.store.addTobasket(this.gameData);
    },
    RemoveFromCart: function () {
      this.store.removefromBasket(this.gameData);
    },
  },
};
</script>

<template>
  <div class="w-full h-[90%]">
    <div class="game w-full h-full flex items-center" v-if="gameData">
      <img
        class="background invisible lg:visible"
        :src="gameData.imageBackground"
      />
      <div
        class="w-full lg:h-[65%] relative z-10 lg:flex items-start mb-20 lg:mb-0"
      >
        <figure class="w-[150px] lg:w-[300px] lg:h-full">
          <img :src="gameData.imageCover" />
          <SkeletonLoading
            classList="w-[150px] lg:w-[300px] lg:h-[400px]"
            v-if="!gameData"
          />
        </figure>
        <div
          class="game-details lg:ml-5 mt-5 lg:mt-0 text-white flex flex-col w-full lg:w-[70%]"
        >
          <div class="flex flex-col lg:w-[70%]">
            <div class="text-4xl font-bold">{{ gameData.title }}</div>
            <div class="text-1xl my-5">{{ gameData.description }}</div>
            <SkeletonLoading classList="lg:w-[70%] h-[20%]" v-if="!gameData" />
            <SkeletonLoading
              classList="lg:w-[70%] h-[50%] my-5"
              v-if="!gameData"
            />
          </div>
          <div class="flex my-1">
            <p>Developers:</p>
            <p class="ml-2">{{ gameData.developers }}</p>
          </div>
          <div class="genre flex my-3">
            <p>Genre:</p>
            <div class="ml-2">
              <router-link
                class="ml-1 underline"
                v-for="(genre, index) in gameData.genres"
                :key="index"
                :to="`/search/genre/${genre}`"
              >
                {{ genre
                }}<span v-if="index < gameData.genres.length - 1">,</span>
              </router-link>
            </div>
          </div>
          <div class="flex justify-between lg:w-[70%] my-3" v-if="store.logged">
            <div
              class="flex items-center"
              v-if="gameData.price !== `TBA` && !inLibrary"
            >
              <button
                class="bg-gradient p-2 rounded ring-2"
                @click="() => RemoveFromCart()"
                v-if="inCart"
              >
                Remove from Cart
              </button>
              <button
                class="bg-gradient p-2 rounded ring-2"
                @click="() => AddToCart()"
                v-else
              >
                Add To Cart
              </button>
              <p class="ml-3">{{ gameData.price }}</p>
            </div>
            <div v-else-if="!inLibrary">
              <h1>Price: TBA</h1>
            </div>
            <div class="flex justify-between lg:w-[70%] my-3" v-if="inLibrary">
              <div class="flex items-center">
                <p class="p-2">In Library</p>
              </div>
            </div>
            <p>{{ gameData.released }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.section-wrapper .game {
  animation: fadeIn 500ms ease;
}

.section-wrapper .game::after {
  content: "";
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.562);
}

.section-wrapper .game .background {
  position: fixed;
  z-index: 1;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
</style>
