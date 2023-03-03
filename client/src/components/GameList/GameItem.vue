<script setup>
import { computed } from "vue";
import { useAsylumState } from "../../stores/home";
import { debounceFn } from "../debounce";

const props = defineProps(["game", "displayPrice"]);
const store = useAsylumState();
var inBasket = computed(() => store.inBasket(props.game.id));
var inLibrary = computed(() => store.inLibrary(props.game.id));

</script>
<template>
  <div class="w-full h-[84%]">
    <figure class="gameCover w-full h-full relative z-10">
      <img class="w-full h-full" :src="game.imageCover" />
    </figure>
    <div class="flex items-center px-3 py-1 md:py-2">
      <div
        class="game-details w-[110px]"
        :class="props.displayPrice && 'w-full'"
      >
        <p
          class="text-xs lg:text-sm whitespace-nowrap w-full text-ellipsis overflow-hidden text-white"
        >
          {{ game.title }}
        </p>
        <div class="flex justify-between items-center text-xs lg:text-sm text-gray-200">
          <p :class="props.displayPrice && 'hidden'">
            <span>
              {{ game.price }}
            </span>
            <span
              v-if="game.discount"
              class="ml-2 relative"
              :class="game.discount && 'price font-bold'"
            >
              -{{ game.discount }}%
            </span>
          </p>
        </div>
      </div>
      <div
        class="ml-auto"
        :class="props.displayPrice && 'hidden'"
        v-if="inBasket !==  undefined && game.price !== 'TBA'"
      >
        <figure
          class="w-[30px] lg:w-[40px] list-shadow bg-red-500 rounded-md transition ease-in active:shadow-none"
          v-if="!inBasket && !inLibrary"
          @click="
            (e) => {
              e.stopPropagation();
              debounceFn(() => store.addTobasket(props.game));
            }
          "
        >
          <img src="@/assets/icons/add.svg" class="" />
        </figure>
        <figure
          class="w-[30px] lg:w-[40px] list-shadow bg-red-500 rounded-md transition ease-in active:shadow-none"
          v-else-if="!inLibrary"
          @click="
            (e) => {
              e.stopPropagation();
              store.removefromBasket(props.game);
            }
          "
        >
          <img src="@/assets/icons/remove.svg" class="" />
        </figure>
        <p v-else class="text-xs lg:text-sm text-gray-300">In Library</p>
      </div>
    </div>
  </div>
</template>
<style>
.game-item {
  cursor: pointer;
  overflow: hidden;
  transition: all 30ms ease;
}

.game-details .price::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 30px;
  height: 2px;
  rotate: 30deg;
  background-color: red;
}

.game-item .gameCover {
  overflow: hidden;
}

@media screen and (max-width: 1024px) {
}
</style>
