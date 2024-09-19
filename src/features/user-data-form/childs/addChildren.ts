import { ref } from 'vue'
import { type ChildData, useUserData } from '@/entities'

const { setChildData } = useUserData()

const childForms = ref<ChildData[]>([])

const useAddChildren = () => {
  const addChildForm = () => {
    if (childForms.value.length < 5) {
      const ChildElement = {
        id: childForms.value.length,
        name: '',
        age: 0
      }
      childForms.value.push(ChildElement)
    }
  }
  const removeChildForm = (id: number) => {
    if (id >= 0 && id <= childForms.value.length + 1) {
      childForms.value.splice(id, 1)
    }
  }
  const editChildData = (childData: ChildData) => {
    childForms.value[childData.id].name = childData.name
    childForms.value[childData.id].age = childData.age
  }

  const saveChildren = () => {
    setChildData(childForms.value)
  }
  return { addChildForm, removeChildForm, childForms, editChildData, saveChildren }
}

export { useAddChildren }
