<script setup>
import { useAsylumState } from "@/stores/home";
import GameList from "../components/GameList.vue";
import { getStripeSession } from "@/components/stripe";
import { computed } from "vue";

const store = useAsylumState();
const basketState = computed(() => store.userProfile.basket);

const handleSubmit = () => {
  const line_items = basketState.value.map((item) => {
    return {
      price: item.priceId,
      quantity: 1,
    };
  });
  const ids = basketState.value.map((item) => item.id);

  getStripeSession(line_items, ids);
};
</script>
<template>
  <div class="w-full h-full">
    <div class="flex flex-col lg:flex-row" v-if="basketState">
      <div class="w-[70%] h-fit">
        <GameList v-bind:gameList="basketState" v-if="basketState.length > 0" />
        <div class="w-[300px] h-[300px] flex items-center" v-else>
          <img
            src="https://media.tenor.com/CMpNQO7SBWIAAAAC/no-money-donald-duck.gif"
          />
        </div>
      </div>
      <div
        class="checkout-section rounded-lg w-full lg:w-[25%] h-[80%] shadow p-10 text-white flex flex-col justify-between"
      >
        <div class="checkout-list w-full relative z-10">
          <div
            class="flex items-end justify-between my-3"
            v-for="game in basketState"
            :key="game.id"
          >
            <p class="w-[70%]">{{ game.title }}</p>
            <p class="w-[25%] text-right">{{ game.price }}</p>
          </div>
          <div class="flex justify-between border-t-2">
            <p class="w-[70%]">Total</p>
            <p class="w-[25%] text-right">
              ${{
                basketState
                  .reduce((acc, obj) => {
                    return acc + Number(obj.price.substring(1));
                  }, 0)
                  .toFixed(2)
              }}
            </p>
          </div>
        </div>
        <div class="col s12 place-order-button-block">
          <button class="btn-shadow w-full p-3 mt-5" @click="handleSubmit">
            Order
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex items-center justify-center" v-else>
      <h1 class="text-3xl text-white">
        Please log in to add items to your basket.
      </h1>
    </div>
  </div>
</template>
<style>
.checkout-section {
  backdrop-filter: blur(20px);
}

button {
  transition: all 300ms ease;
}

button:active {
  box-shadow: none;
}
</style>
