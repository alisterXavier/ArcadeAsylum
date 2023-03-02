import { defineStore } from "pinia";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  query,
  getDocs,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/components/firebase";

export const useAsylumState = defineStore("asylumState", {
  state: () => ({
    userProfile: {},
    HomeState: [],
    PurchaseState: [],
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
      // user.library = this.HomeState.filter((item) =>
      //   user.library.some((game) => game === item.id)
      // );
      this.userProfile = user;
      const colRef = collection(db, "checkouts");
      const queryRef = await getDocs(
        query(
          colRef,
          where("uid", "==", user.userId),
          where("payment", "==", 200)
        )
      );
      const purchases = [];
      queryRef.forEach((item) => {
        purchases.push(item.data());
      });
      this.PurchaseState = purchases;
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
    inBasket: function (id) {
      if (this.userProfile.basket)
        return this.userProfile.basket.some((item) => item.id === id);
    },
    inLibrary: function (id) {
      if (this.userProfile.library)
        return this.userProfile.library.some(
          (item) => item.id === id
        );
    },
  },
});
