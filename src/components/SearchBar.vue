<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

// This function reads the text the user types and sends it to the parent.
// That way the search term updates live while the user types.
function updateValue(event: Event) {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value)
}
</script>

<template>
  <input
    :value="props.modelValue"
    @input="updateValue"
    placeholder="Notizen durchsuchen..."
  >
</template>
