import { ref } from 'vue'
import { useError } from '@/shared'
import { validateField, validate } from '../validation/forms'
import { userData } from '../UserData'

const isParentDataValid = ref(false)
const isChildDataValid = ref(false)

const validateParentData = () => {
  isParentDataValid.value = validate(userData).valid
}

const validateChildrenData = () => {
  if (!userData.children) return
  isChildDataValid.value = userData.children.every((childData) => validate(childData).valid)
}

const useParentsErrors = () => {
  const initState = { name: '', age: '' }
  const { errors, setInitState } = useError()
  setInitState(initState)

  const validateData = (key: string, data: string | number) => {
    errors.value[key] = validateField(key, data)
    validateParentData()
  }

  return { validateData, errors }
}

const useChildrenErrors = () => {
  const initState = { name: '', age: '' }
  const { errors, setInitState } = useError()
  setInitState(initState)

  const validateData = (key: string, data: string | number) => {
    errors.value[key] = validateField(key, data)
    validateChildrenData()
  }

  return { validateData, errors }
}

export {
  useParentsErrors,
  isParentDataValid,
  isChildDataValid,
  useChildrenErrors,
  validateChildrenData,
  validateParentData
}
export * from './rules'
export * from './forms'
