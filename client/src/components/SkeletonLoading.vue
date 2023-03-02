<script setup>
defineProps({
  classList: {
    type: String,
  },
  times: {
    type: String,
  },
});
</script>
<template lang="">
  <div
    class="skeletonLoading"
    :class="classList"
    v-for="time in Number(times)"
    :key="time"
  ></div>
</template>
<style>
.skeletonLoading {
  height: v-bind(height);
  width: v-bind(width);
  margin-right: v-bind(marginRight);
  margin-left: v-bind(marginLeft);
  border-radius: v-bind(borderRadius);
  background-color: rgba(182, 182, 182, 0.61);
  animation: pluseFade 1.2s linear infinite;
}
</style>
