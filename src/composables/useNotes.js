import { computed, ref } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  const searchTerm = ref('')

  // This function adds a new note to the list so the user can save it immediately
  /** @param {import('../types/note').Note} note */
  function addNote(note) {
    notes.value.push(note)
  }

  // This function removes a note by its id and keeps the list clean
  function deleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
  }

  // This computed value filters the notes based on the search text
  // It checks title, text, and tags so the user can find notes quickly
  const filteredNotes = computed(() => {
    const term = searchTerm.value.trim().toLowerCase()

    if (!term) {
      return notes.value
    }

    return notes.value.filter(note =>
      note.title.toLowerCase().includes(term) ||
      note.text.toLowerCase().includes(term) ||
      note.tags.some(tag => tag.toLowerCase().includes(term))
    )
  })

  return { notes, addNote, deleteNote, searchTerm, filteredNotes }
}
