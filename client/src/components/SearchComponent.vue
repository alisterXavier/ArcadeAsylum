<script>
import {
  Menu as CustomMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { useAsylumState } from "../stores/home";

export default {
  components: {
    ChevronDownIcon,
    CustomMenu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  data() {
    return {
      store: useAsylumState(),
      searchRes: undefined,
    };
  },
  methods: {
    handleSearchRes: function(value){
      this.$router.push({ path: `/search/${value}` });
      this.$refs.searchRef.value = ""
      this.searchRes = undefined
    },
    handleSearch: function (e) {
      let { value } = e.currentTarget;
      if (value.length > 0) {
        this.$router.push({ path: `/search/${value}` });
        this.$refs.searchRef.value = "";
      }
    },
    handleSearchResFilter: function () {
      const { value } = this.$refs.searchRef;
      this.searchRes =
        value.length > 0
          ? this.store.HomeState.filter((items) =>
              items.title.toLowerCase().includes(value)
            )
          : undefined;
    },
  },
};
</script>
<template>
  <div class="search-wrapper relative z-20 w-full lg:w-[50%]">
    <div class="search rounded-lg bg-glass flex items-center">
      <div class="w-[80%] h-full relative">
        <input
          type="text"
          @keyup.enter="handleSearch"
          class="rounded-lg bg-transparent pl-3 text-white w-full"
          placeholder="Search for a game"
          @input="handleSearchResFilter"
          ref="searchRef"
        />
        <div
          class="absolute left-0 origin-top-right mt-2 w-full h-fit bg-white text-black rounded-md overflow-hidden"
        >
          <p
            class="p-3 hover:bg-gray-200 cursor-pointer"
            v-for="(item, index) in searchRes"
            :key="index"
            :class="index > 0 && 'border-t'"
            @click="() => handleSearchRes(item.title)"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
      <CustomMenu
        as="div"
        class="select w-[15%] h-fit relative inline-block text-left"
      >
        <div>
          <MenuButton
            class="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none"
          >
            Genres
            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute bg-white right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Action"
                  :class="[
                    active ? 'bg-gray-200 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Action</router-link
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Adventure"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Adventure</router-link
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Horror"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Horror</router-link
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Driving"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Driving</router-link
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Strategy"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Strategy</router-link
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Sport"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Sport</router-link
                >
              </MenuItem>
            </div>
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Fighting"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Fighting</router-link
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <router-link
                  to="/search/genre/Fantasy"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm',
                  ]"
                  >Fantasy</router-link
                >
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </CustomMenu>
    </div>
  </div>
</template>
<style>
.search-wrapper {
  height: 50px;
}

.search-wrapper .search {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.301);
}

input {
  height: 100%;
  color: white;
}

.select {
  height: 100%;
  background: transparent;
  color: white;
}

select * {
  background: transparent;
  color: white;
}
</style>
