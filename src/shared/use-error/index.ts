import { ref, toRaw } from 'vue'

export const useError = () => {
  const initState = ref({})
  const errors = ref({})
  const setInitState = (newInitState) => {
    initState.value = structuredClone(toRaw(newInitState))
    setErrors(initState.value)
  }
  const setErrors = (newErrors) => {
    Object.keys(newErrors).forEach((error: string) => {
      if (newErrors[error] !== undefined) {
        errors.value[error] = newErrors[error]
      }
    })
  }
  const clearError = () => {
    setErrors(initState.value)
  }

  return {
    setInitState,
    setErrors,
    clearError,
    errors
  }
}
