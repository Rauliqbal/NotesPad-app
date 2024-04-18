<script setup>
defineProps({
   title: String,
   body: String,
   createdAt: String
});
</script>
<template>
   <NuxtLink to="/"
      class="flex justify-between gap-10 p-4 rounded-lg bg-slate-100 transition-all duration-300 ease-out">
      <div>
         <div>
            <h4 class="font-medium text-xl">{{ title }}</h4>
            <p class="text-gray-600 font-medium text-sm mt-1">Created at {{ createdAt }}</p>
         </div>
         <div class="flex gap-4 mt-4">
            <div class="inline-flex gap-2 items-center">
               <i class="text-xl ai-shipping-box-v1"></i>
               <p class="text-sm font-semibold">Medium</p>
            </div>
            <div class="inline-flex gap-2 items-center">
               <i class="text-xl ai-flag"></i>
               <p class="text-sm font-semibold">In Progress</p>
            </div>
         </div>
      </div>
      <div class="inline-flex items-center">
         <Button class="btn-delete" >Delete</Button>
      </div>
   </NuxtLink>
</template>