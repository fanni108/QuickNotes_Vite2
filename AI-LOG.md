# AI-LOG

## 1. App structure and file separation
- Prompt: "I am building a small Vue notes app. How should I split the app into components and composables so the logic stays maintainable?"
- Used: I asked for guidance on structuring the project for a notes app and for naming responsibilities across files.
- Understood/adjusted: I kept the UI in the components and the state logic in the composable, which made the app easier to follow and extend.

## 2. Reusable card component and note display
- Prompt: "How can I create a reusable card wrapper in Vue and pass note data into a child component using props?"
- Used: AI explained how slots work for a generic card layout and how props should be passed to display a note.
- Understood/adjusted: I implemented a base card with slots and used a separate note card that receives the note object and renders the title, text, and tags.

## 3. Add-note form and v-model input handling
- Prompt: "How can I create a form in Vue that stores title, text, and tags, and then emits the new note to the parent component?"
- Used: I asked for help with refs, form validation, and emitting custom events.
- Understood/adjusted: I kept the input logic in the form component and only sent a valid note object upward once the fields were checked.

## 4. Search bar and two-way binding
- Prompt: "How do I make a search input in Vue update the parent state with v-model and emit without duplicating logic?"
- Used: AI helped explain the pattern for `modelValue` and `update:modelValue`.
- Understood/adjusted: I used a controlled input component so the search text remains reactive and can be shared with the note list in the app.

## 5. Saving notes in localStorage
- Prompt: "How can I persist the notes in localStorage so they remain after a reload, while keeping the logic in a reusable composable?"
- Used: I used AI to clarify how `ref`, `watch`, `JSON.parse`, and `JSON.stringify` can work together.
- Understood/adjusted: I created a reusable storage composable and adapted it to my app so the note array is stored automatically whenever it changes.

## 6. Filtering notes by title, text, and tags
- Prompt: "How can I filter notes dynamically by title, content, and tags using computed values in Vue?"
- Used: AI explained how `computed()` and `filter()` can be used to derive a filtered list from the current search term.
- Understood/adjusted: I combined the search across all relevant fields and kept the filtering logic in the notes composable so the UI remains simple.

## 7. Style refinement and visual polish
- Prompt: "Can you help me improve the visual design of the app with a dark, modern galaxy-themed styling approach while keeping the structure simple and readable?"
- Used: I asked for ideas on color palette, card styling, buttons, shadows, and spacing.
- Understood/adjusted: I used the suggestions selectively and adapted them to my own layout, keeping the logic and component structure intact while refining the appearance.
