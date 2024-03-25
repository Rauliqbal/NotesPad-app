<script setup>
defineProps({
  title: String,
  body: String,
  createdAt: String
});
</script>

<template>
  <NuxtLink to="/"
    class="p-4 rounded-xl bg-amber-100 ring ring-black hover:scale-95 transition-all duration-300 ease-out">
    <h5 class="font-medium text-xl font-poppins">{{ title }}</h5>
    <p class="mt-4 line-clamp-3">{{ body }}</p>
    <h6 class="text-gray-600 font-medium text-sm mt-10 font-poppins">{{createdAt}}</h6>
  </NuxtLink>
</template>
