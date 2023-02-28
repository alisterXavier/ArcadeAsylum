<script setup>
import { googleSignIn } from "@/components/signIn";
import { useAsylumState } from "@/stores/home";
import { computed } from "vue";

const store = useAsylumState();
const isLogged = computed(() => store.logged);
</script>

<template>
  <nav
    class="nav-wrapper w-[100vw] h-[10vh] lg:w-[15vw] lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0"
  >
    <div
      class="nav shadow h-full lg:h-[90%] w-full lg:w-[50%] lg:rounded-lg flex items-center justify-start lg:justify-between lg:flex-col"
    >
      <div class="nav-section w-[78%] lg:h-[40%] lg:w-fit">
        <div
          class="nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="() => $router.push({ path: '/' })"
        >
          <img src="@/assets/icons/house.svg" />
        </div>
        <div
          class="nav-item relative w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="() => $router.push({ path: '/basket', replace: true })"
        >
          <img src="@/assets/icons/basket.svg" />
          <div
            class="absolute -right-2 -top-2 bg-black rounded-full w-[20px] h-[20px] flex items-center justify-center"
            v-if="store.count && store.count > 0"
          >
            <p class="text-xs">{{ store.count }}</p>
          </div>
        </div>
        <div
          class="nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="() => $router.push({ path: '/library', replace: true })"
        >
          <img src="@/assets/icons/books.svg" />
        </div>
      </div>
      <div
        class="nav-section w-[35%] lg:h-[30%] lg:w-fit flex lg:flex-col justify-evenly"
        v-if="isLogged"
      >
        <div
          class="nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="() => $router.push({ path: '/', replace: true })"
        >
          <img src="../assets/icons/user.svg" />
        </div>
        <div
          class="nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="
          () => {
            auth.signOut();
            store.userProfile = {};
          }
        "
        >
          <img src="../assets/icons/log.svg" />
        </div>
      </div>
      <div class="nav-section lg:h-[35%]" v-else>
        <div
          class="nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
          @click="googleSignIn"
        >
          <img src="@/assets/icons/google.svg" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-wrapper {
  z-index: 2;
}

.nav {
  backdrop-filter: blur(20px);
}

.nav-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
}

.nav-item img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1023px) {
  .nav-wrapper {
    position: fixed;
    top: 95%;
    bottom: 0%;
  }

  .nav {
    background-color: black !important;
  }

  .nav-section {
    justify-content: space-evenly;
    flex-direction: row;
  }

  .nav-item {
    width: 90px;
  }
}
</style>
