<script setup lang="ts">
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue'
import SearchBar from './components/SearchBar.vue'
import { useNotes } from './composables/useNotes.js'

// This is the main page of the app. It brings together the form,
// the search bar, and the list of notes so they work as one app
const { filteredNotes, searchTerm, addNote, deleteNote } = useNotes()
</script>

<template>
  <main>
    <h1>QuickNotes</h1>

    <NoteForm @add="addNote" />

    <SearchBar v-model="searchTerm" />
    <NoteCard
      v-for="note in filteredNotes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
    />
  </main>
</template>
