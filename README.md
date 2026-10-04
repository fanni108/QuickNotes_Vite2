# QuickNotes
Next Generation Web Frontends - Hausübung 2 - Quick Notes
QuickNotes is a small notes app built with Vue 3, TypeScript, and Vite.

## Setup

```bash
npm install
npm run dev
```

Then open the local address shown by Vite in the browser.

## Project structure

The note logic is kept in `useNotes`, because that is where the main actions happen: adding notes, deleting them, searching, and filtering them. The components mainly handle display and user input.

The persistence logic is in `useLocalStorage`, which handles reading from and writing to `localStorage`. `useNotes` can use it without caring about the browser storage details itself.

## Main features

- Add notes with title, text, and tags
- Delete notes
- Search notes by title, text, or tags
- Keep notes saved in the browser after refresh


## Short reflection

### Why is `NoteCard` not allowed to change the note prop directly?

In Vue, props flow from parent to child. The child should not change them directly. 
Instead, `NoteCard` only sends the note ID through the `delete` event. The parent component receives this event and calls `deleteNote` from `useNotes`, which removes the note from the list.

### What happens if `useNotes()` is called twice?

Two calls do not share the same reactive `notes` reference. 
Each call creates its own ref with `useLocalStorage('quicknotes', [])` and reads the current value from `localStorage`. 
Changes are saved again under the same key, but the other ref is not automatically updated. In this project, `useNotes()` is only called once in `App.vue`.

### What is the purpose of the `Note` type?

The `Note` type describes the structure of a note at development time: it needs an `id` number, `title` and `text` strings, and a `tags` array of strings. TypeScript can detect wrong data earlier, and the code becomes easier to understand. In the final JavaScript output, this type no longer exists because it is only used during development.
