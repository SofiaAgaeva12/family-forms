import { ref } from 'vue'
import { type ChildData, useUserData, userData } from '@/entities'

const { setChildData } = useUserData()

const unsavedChildren = ref<ChildData[]>([])

const useAddChildren = () => {
  const addChildForm = () => {
    if (unsavedChildren.value.length < 5) {
      const ChildElement = {
        id: unsavedChildren.value.length,
        name: '',
        age: 0
      }
      unsavedChildren.value.push(ChildElement)
    }
  }
  const removeChildForm = (id: number) => {
    if (id >= 0 && id <= unsavedChildren.value.length + 1) {
      unsavedChildren.value.splice(id, 1)
    }
  }
  const editChildName = (childData: ChildData) => {
    unsavedChildren.value[childData.id].name = childData.name
  }
  const editChildAge = (childData: ChildData) => {
    unsavedChildren.value[childData.id].age = childData.age
  }

  const saveChildren = () => {
    setChildData(unsavedChildren.value)
  }
  const getSavedChildren = () => {
    unsavedChildren.value = userData.children
  }
  return {
    addChildForm,
    removeChildForm,
    unsavedChildren,
    editChildName,
    editChildAge,
    saveChildren,
    getSavedChildren
  }
}

export { useAddChildren }
