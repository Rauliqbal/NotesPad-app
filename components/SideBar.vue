<script setup>
const NAVLINKS = [
   { title: 'Overview', url: '/', icon: 'ai-grid' },
   { title: 'Manage Task', url: '/task', icon: 'ai-clipboard' },
   { title: 'Manage Note', url: '/note', icon: 'ai-pin' }
]

const OTHERLINKS = [
   { title: 'Setting', url: '/setting' },
   { title: 'Help Center', url: '/help' },
   { title: 'Logout', url: '/logout' }
]
</script>
<template>
   <aside class="absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 -translate-x-full">
      <div class="p-6">
         <NuxtLink>
         <img  src="~/assets/images/logo.svg" alt="">
         </NuxtLink>   
      </div>
      <div class="no-scrollbar px-6 py-8 flex flex-col overflow-y-auto duration-300 ease-linear mt-8">
         <div>
            <p class="font-bold text-gray-400 leading-relaxed text-sm">GENERAL</p>
            <nav class="flex flex-col gap-4 mt-4">
               <NuxtLink v-for="link in NAVLINKS" exact-active-class="active"
                  class="inline-flex gap-2 items-center px-6 py-3 ring-1 ring-inset ring-gray-200 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 rounded-full"
                  :to="link.url"> <i :class="link.icon + ' text-xl text-gray-400 transition-all duration-300'"></i>
                  {{ link.title }}</NuxtLink>
            </nav>
         </div>
         <div class="mt-10">
            <p class="font-bold text-gray-400 leading-relaxed text-sm">OTHERS</p>
            <nav class="flex flex-col gap-4 mt-4">
               <NuxtLink v-for="link in OTHERLINKS"
                  class="px-6 py-3 ring-1 ring-inset ring-gray-200 hover:text-white hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 rounded-full"
                  :to="link.url">{{ link.title }}</NuxtLink>
            </nav>
         </div>
      </div>
   </aside>
</template>
<style scoped>
.active {
   @apply bg-[#474F7A] shadow-lg shadow-indigo-200 ring-1 ring-inset ring-[#474F7A] text-white
}
</style>