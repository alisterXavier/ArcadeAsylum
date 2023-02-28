<script setup>
defineProps({
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  borderRadius: {
    type: String,
  },
  times: {
    type: String,
  },
  marginRight: {
    type: String,
  },
  marginLeft: {
    type: String,
  },
});
</script>
<template lang="">
  <div class="skeletonLoading" v-for="time in Number(times)" :key="time"></div>
</template>
<style>
.skeletonLoading {
  height: v-bind(height);
  width: v-bind(width);
  margin-right: v-bind(marginRight);
  margin-left: v-bind(marginLeft);
  border-radius: v-bind(borderRadius);
  background-color: rgba(155, 155, 155, 0.842);
  animation: pluseFade 1.2s linear infinite;
}
</style>
