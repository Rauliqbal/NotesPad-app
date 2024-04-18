<script setup>
const options = {
   chart: {
      type: 'donut',
   },
   responsive: [{
      breakpoint: 480,
      options: {
         chart: {
            width: 200
         },
         legend: {
            position: 'bottom'
         }
      }
   }]
};

const series = [
   44, 55, 41, 17, 15
];

</script>
<template>
   <div>
      <ClientOnly>
         <!-- <apexchart :key="series" height="400" width="380" :options="options" :series="series"></apexchart> -->
         <div id="chart">
            <apexchart type="donut" :options="options" :series="series"></apexchart>
         </div>
      </ClientOnly>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="updateChart">
         Change
      </button>
   </div>
</template>
