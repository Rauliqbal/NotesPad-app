<script setup>
useHead({
  title: "NotesPad - WebApp"
})

// Fetched Data
const { data: notes } = await useFetch('http://localhost:8080/api/notes')

const chartOptions = {
  chart: {
    type: 'donut',
    width: 380
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      
    }
  }],
  legend: {
        show: false,
        fontSize: '14px'
      },
  dataLabels: {
    enabled: false
  },
  labels: ['All Note', 'All Task', 'On Progress', 'Task Completed'],

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
        labels: {
          show: true,
          name: {
            show: true
          },
          value: {
            show: true
          },
          total: {
            show: true,
            label: 'Total'
          }
        }
      }
    }
  },
  colors: ['#474f7a', '#166cc9']
}
const series = [44, 55, 41, 17]
</script>
<template>
  <main>
    <div class="p-4 md:p-10">
      <!-- Analytics -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="flex flex-col gap-4 bg-white px-6 py-7 rounded-xl shadow-md">
          <div class="flex items-center justify-center text-2xl w-12 h-12 bg-[#e2e5f5] text-[#474F7A] rounded-full">
            <i class="ai-pin"></i>
          </div>
          <div>
            <p class="text-2xl font-semibold">24</p>
            <p class="text-sm text-gray-500 font-medium mt-1">All Note</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 bg-white px-6 py-7 rounded-xl shadow-md">
          <div class="flex items-center justify-center text-2xl w-12 h-12 bg-[#e2e5f5] text-[#474F7A] rounded-full">
            <i class="ai-clipboard"></i>
          </div>
          <div>
            <p class="text-2xl font-semibold">24</p>
            <p class="text-sm text-gray-500 font-medium mt-1">All Task</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 bg-white px-6 py-7 rounded-xl shadow-md">
          <div class="flex items-center justify-center text-2xl w-12 h-12 bg-[#e2e5f5] text-[#474F7A] rounded-full">
            <i class="ai-clock"></i>
          </div>
          <div>
            <p class="text-2xl font-semibold">24</p>
            <p class="text-sm text-gray-500 font-medium mt-1">On Progress</p>
          </div>
        </div>
        <div class="flex flex-col gap-4 bg-white px-6 py-7 rounded-xl shadow-md">
          <div class="flex items-center justify-center text-2xl w-12 h-12 bg-[#e2e5f5] text-[#474F7A] rounded-full">
            <i class="ai-check"></i>
          </div>
          <div>
            <p class="text-2xl font-semibold">24</p>
            <p class="text-sm text-gray-500 font-medium mt-1">Task Complete</p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-7 gap-8 mt-8">
        <div class="col-span-4 bg-white px-6 py-7 rounded-xl shadow-md">
          <!-- Latest Task -->
          <h3 class="text-xl font-medium">Latest Task</h3>

          <div class="grid grid-cols-1 gap-4 mt-8">
            <CardTask v-for="note in 3" title="Buat website untuk client #1" body="note.body" createdAt='13 Februari 2024' />
          </div>

        </div>
        <div class="col-span-3 bg-white px-6 py-7 rounded-xl shadow-md">
          <!-- Chart -->
          <ClientOnly>
            <div id="chart">
              <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>

              <!-- Chart Legend -->
              <div class="mt-10 flex flex-wrap items-center justify-center gap-y-3">
                <div class="w-full px-8 sm:w-1/2">
                  <div class="flex w-full items-center">
                    <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#474f7a]"></span>
                    <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span>All Note</span>
                      <span> 65% </span>
                    </p>
                  </div>
                </div>
                <div class="w-full px-8 sm:w-1/2">
                  <div class="flex w-full items-center">
                    <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#166cc9]"></span>
                    <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span>All Task </span>
                      <span> 34% </span>
                    </p>
                  </div>
                </div>
                <div class="w-full px-8 sm:w-1/2">
                  <div class="flex w-full items-center">
                    <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#474f7a]"></span>
                    <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> On Progress </span>
                      <span> 45% </span>
                    </p>
                  </div>
                </div>
                <div class="w-full px-8 sm:w-1/2">
                  <div class="flex w-full items-center">
                    <span class="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#166cc9]"></span>
                    <p class="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                      <span> Completed </span>
                      <span> 12% </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>
  </main>
</template>
