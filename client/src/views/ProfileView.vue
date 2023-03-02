<script setup>
import { computed, ref } from "vue";
import { useAsylumState } from "../stores/home";
import SkeletonLoading  from "@/components/SkeletonLoading.vue"

const SortRef = ref({ price: null, date: null });

const store = useAsylumState();
const profile = computed(() => store.userProfile);
const purchases = computed(function () {
  var sortedArr = [...store.PurchaseState];
  if (SortRef.value.price === false)
    sortedArr.sort((a, b) => b.total - a.total);
  else if (SortRef.value.price === true)
    sortedArr.sort((a, b) => a.total - b.total);
  else if (SortRef.value.date === false)
    sortedArr.sort((a, b) => new Date(b.date) - new Date(a.date));
  else if (SortRef.value.date === true)
    sortedArr.sort((a, b) => new Date(a.date) - new Date(b.date));
  return sortedArr;
});

const sort = (e) => {
  const { id } = e.currentTarget;
  const { price, date } = SortRef.value;
  Object.keys(SortRef.value).forEach((item) => (SortRef.value[item] = null));
  if (id === "price") {
    SortRef.value.price = price === null ? true : price ? false : null;
  } else {
    SortRef.value.date = date === null ? true : date ? false : null;
  }
};

</script>
<template lang="">
  <div class="my-10">
    <div>
      <figure class="w-[150px] h-[150px] rounded-md overflow-hidden">
        <img :src="profile.photo" v-if="profile.photo"/>
        <SkeletonLoading classList="w-full h-full" times="1" v-else/>
      </figure>
      <p class="text-2xl text-white my-2" v-if="profile.username">{{ profile.username }}</p>
      <SkeletonLoading classList="w-[200px] h-[30px] my-2" times="1" v-else/>
    </div>
    <div class="my-5 text-white">
      <h1 class="text-3xl">Purchases</h1>
      <div class="my-5 flex">
        <div class="lg:w-[80%] rounded-md overflow-hidden">
          <div class="flex items-center text-sm justify-evenly border-b bg-black">
            <p class="w-[40px] hidden lg:block">Sno</p>
            <div class="w-[450px] flex items-center p-2 mx-1" id="title">
              <p>Title</p>
            </div>
            <div
              class="w-[200px] flex items-center p-2 mx-1 cursor-pointer"
              id="price"
              @click="sort"
            >
              <p class="">Price</p>
              <img
                class="w-[20px]"
                :class="
                  SortRef.price === null
                    ? 'hidden'
                    : !SortRef.price && 'rotate-180'
                "
                src="@/assets/icons/arrow.svg"
              />
            </div>
            <div
              class="flex items-center p-2 mx-1 w-[100px] cursor-pointer"
              id="date"
              @click="sort"
            >
              <p class="">Date</p>
              <img
                class="w-[20px]"
                :class="
                  SortRef.date === null
                    ? 'hidden'
                    : !SortRef.date && 'rotate-180'
                "
                src="@/assets/icons/arrow.svg"
              />
            </div>
          </div>
          <div
            v-for="(purchase, index) in purchases"
            :key="index"
            class="border-b text-sm flex items-center justify-evenly"
          >
            <p class="w-[40px] p-2 mx-1 hidden lg:block">{{ index + 1 }}</p>
            <div class="w-[450px] p-2 mx-1 flex flex-col justify-center">
              <p v-for="(title, index) in purchase.items" :key="index">
                {{ title.title }}
              </p>
            </div>
            <p class="h-full w-[200px] p-2 mx-1">
              ${{ Number(purchase.total).toFixed(2) }}
            </p>
            <p class="h-full p-2 mx-1 w-[100px]">{{ purchase.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
