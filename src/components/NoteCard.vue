<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import type { Note } from '../types/note'

const props = defineProps<{
  note: Note
}>()

const emit = defineEmits<{
  delete: [id: number]
}>()

// This function tells the parent component which note should be deleted
// It is a small "send event" step that keeps the note logic in the right place.
function deleteNote() {
  emit('delete', props.note.id)
}
</script>

<template>
  <BaseCard>
    <template #header>
      <h2>{{ props.note.title }}</h2>
    </template>

    <p>{{ props.note.text }}</p>

    <ul>
      <li v-for="tag in props.note.tags" :key="tag">
        {{ tag }}
      </li>
    </ul>

    <button type="button" @click="deleteNote">Löschen</button>
  </BaseCard>
</template>
