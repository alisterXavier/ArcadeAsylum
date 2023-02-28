<script>
import { RouterView } from "vue-router";
import NavView from "./views/NavView.vue";
import { onMounted } from "vue";
import { useAsylumState } from "./stores/home";
import { Gradient } from "@/components/Gradient";
import { auth, db } from "@/components/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "@firebase/firestore";

export default {
  name: "app",
  data() {
    return {
      store: useAsylumState(),
    };
  },
  components: {
    NavView,
    RouterView,
  },
  setup() {
    onMounted(() => {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    });
  },
  mounted() {
    onAuthStateChanged(auth, async (res) => {
      if (res) {
        const uid = res.uid;
        const colRef = collection(db, "users");
        const data = await getDoc(doc(colRef, uid));
        if (data.exists()) {
          const user = {
            userId: data.data().userId,
            username: data.data().displayName,
            email: data.data().email,
            photo: data.data().photoURL,
            library: data.data().library,
            basket: data.data().basket,
          };

          this.store.userInit(user);
        }
      }
    });
    this.store.init();
  },
};
</script>
<template>
  <main class="main-wrapper flex">
    <NavView />
    <div class="section-wrapper w-full lg:w-[85vw] p-4 lg:pt-[40px]">
      <RouterView />
    </div>
    <canvas id="gradient-canvas" data-transition-in />
  </main>
</template>

<style>
.main-wrapper {
  display: flex;
}

@media screen and (max-width: 1023px) {
  .main-wrapper {
    flex-direction: column;
  }
}
</style>
