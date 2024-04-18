<script setup>
useHead({
  title: "NotesPad - WebApp"
})

const { data: notes } = await useFetch('http://localhost:8080/api/notes')

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
<template>
  <main>
    <div class="p-6 md:p-10">
      <h1 class="text-3sxl font-semibold">Welcome Back!👋</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10">
        <CardNote v-for="note in notes.data" :title="note.title" :body="note.body"
          :createdAt="formatDate(note.createdAt)" />
      </div>
    </div>




    <div class="fixed bottom-0 right-0 flex items-center justify-center">
      <button
        class="fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-white flex text-2xl md:text-3xl items-center justify-center rounded-full ring ring-black w-14 h-14 md:w-16 md:h-16 hover:bg-amber-300 transition-all duration-300 ease-out"
        type="button" @click="openModal">
        <i class="ai-plus"></i>
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-amber-100 ring ring-black p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  Add Note
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div class="mt-4">
                  <button type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal">
                    Add
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </main>
</template>
