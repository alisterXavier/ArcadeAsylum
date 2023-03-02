import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BasketView from "@/views/BasketView.vue";
import LibraryView from "@/views/LibraryView.vue";
import SearchView from "@/views/SearchView.vue";
import GenreView from "@/views/GenreView.vue";
import GameView from "@/views/GameView.vue";
import SaleView from "@/views/SaleView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/basket",
      name: "basket",
      component: BasketView,
    },
    {
      path: "/library",
      name: "library",
      component: LibraryView,
    },
    {
      path: "/game/:id",
      name: "Game",
      component: GameView,
    },
    {
      path: "/search/",
      name: "search",
      children: [
        {
          path: "sale",
          name: "sale",
          component: SaleView,
        },
        {
          path: ":id",
          name: "search",
          component: SearchView,
        },
        {
          path: "genre/:id",
          name: "genre",
          component: GenreView,
        },
      ],
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileView,
    },
  ],
});

export default router;
