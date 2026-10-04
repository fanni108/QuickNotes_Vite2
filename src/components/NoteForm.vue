<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from '../types/note'

const title = ref('')
const text = ref('')
const tagsInput = ref('')

const emit = defineEmits<{
  add: [note: Note]
}>()

// This function checks the user input, creates a note object,
// and sends it upward so the app can save it in the list.
function addNote() {
  const noteTitle = title.value.trim()
  const noteText = text.value.trim()

  if (!noteTitle || !noteText) {
    return
  }

  const tags = tagsInput.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)

  const note: Note = {
    id: Date.now(),
    title: noteTitle,
    text: noteText,
    tags
  }

  emit('add', note)

  title.value = ''
  text.value = ''
  tagsInput.value = ''
}
</script>

<template>
  <form @submit.prevent="addNote">
    <label for="title">Titel</label>
    <input id="title" v-model="title" type="text">

    <label for="text">Text</label>
    <textarea id="text" v-model="text"></textarea>

    <label for="tags">Tags</label>
    <input id="tags" v-model="tagsInput" type="text">

    <button type="submit">Hinzufügen</button>
  </form>
</template>
