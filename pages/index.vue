<script setup>
const { data: notes } = await useFetch('http://localhost:8080/api/notes')

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}
</script>
<template>
  <main class="container">
    <div class="flex flex-col p-4 items-center justify-center bg-amber-300 rounded-2xl mt-4 md:mt-6 ring ring-black">
      <h1 class="text-4xl font-semibold font-poppins text-center">NotesPad</h1>
      <p class="font-poppins mt-4 text-center">
        The solution to remembering your notes
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10">
      <CardNote v-for="note in notes.data" :title="note.title" :body="note.body"
        :createdAt="formatDate(note.createdAt)" />
    </div>

    {{ notes.data.data }}

    <button
      class="fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-white flex text-2xl md:text-3xl items-center justify-center rounded-full ring ring-black w-14 h-14 md:w-16 md:h-16 hover:bg-amber-300 transition-all duration-300 ease-out"><i
        class="ai-plus"></i></button>
  </main>
</template>
