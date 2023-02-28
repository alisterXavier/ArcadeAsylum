import { defineStore } from "pinia";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/components/firebase";

export const useAsylumState = defineStore("asylumState", {
  state: () => ({
    userProfile: {},
    HomeState: [],
  }),

  getters: {
    count: function () {
      return this.userProfile.basket
        ? this.userProfile.basket.length
        : undefined;
    },
    logged: function () {
      return Object.keys(this.userProfile).length === 0
        ? undefined
        : this.userProfile;
    },
  },

  actions: {
    init: async function () {
      const colRef = await getDocs(collection(db, "products"));
      const arr = [];
      colRef.forEach((item) => {
        arr.push(item.data());
      });
      this.HomeState = arr;
    },
    userInit: async function (user) {
      user.basket = this.HomeState.filter((item) =>
        user.basket.some((game) => game === item.id)
      );
      user.library = this.HomeState.filter((item) =>
        user.library.some((game) => game === item.id)
      );
      this.userProfile = user;
    },
    addTobasket: async function (game) {
      const docRef = doc(db, "users", this.userProfile.userId);
      await updateDoc(docRef, {
        basket: arrayUnion(game.id),
      });
      this.userProfile.basket.push(game);
    },
    removefromBasket: async function (game) {
      await updateDoc(doc(db, "users", this.userProfile.userId), {
        basket: arrayRemove(game.id),
      });
      this.userProfile.basket = this.userProfile.basket.filter(
        (data) => data.id !== game.id
      );
    },
    getGenre: function (genre) {
      return this.HomeState.filter((data) => data.genres.includes(genre));
    },
    getSearch: function (search) {
      return this.HomeState.filter((data) =>
        new RegExp(search).test(data.title.toLowerCase())
      );
    },
    getSale: function () {
      return this.HomeState.filter((item) => item.discount);
    },
  },
});
