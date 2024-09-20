import { ref } from 'vue'
import { useError } from '@/shared'
import { validateField, validate } from '../validation/forms'
import { userData } from '../UserData'

const isParentDataValid = ref(false)
const isChildDataValid = ref(false)

const useParentsErrors = () => {
  const initState = { name: '', age: '' }
  const { errors, setInitState } = useError()
  setInitState(initState)

  const validateData = (key, data) => {
    errors.value[key] = validateField(key, data)
    isParentDataValid.value = validate(userData).valid
  }

  return { validateData, errors }
}

const useChildrenErrors = () => {
  const initState = { name: '', age: '' }
  const { errors, setInitState } = useError()
  setInitState(initState)

  const validateData = (key, data) => {
    errors.value[key] = validateField(key, data)

    isChildDataValid.value = userData.children.every((childData) => validate(childData).valid)
  }

  return { validateData, errors }
}

export { useParentsErrors, isParentDataValid, isChildDataValid, useChildrenErrors }
export * from './rules'
export * from './forms'
