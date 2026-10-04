import { ref, watch } from 'vue'
 
// This function loads saved data from localStorage when the app starts.
// It also saves every change back to the browser, so the notes stay there after refresh.
export function useLocalStorage(key, initialValue) {
  const stored = localStorage.getItem(key)
  const value = ref(stored === null ? initialValue : JSON.parse(stored))
 
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
 
  return value
}
