import { ref } from 'vue'
import type { Child } from '@/entities'

const useAddChildren = () => {
  const children = ref<Child[]>([])
  const childrenId = ref<number[]>([])

  const addChild = () => {
    if (childrenId.value.length < 5) {
      childrenId.value.push(childrenId.value.length + 1)
    }
  }
  const removeChild = (id: number) => {
    if (children.value.length) {
      children.value.splice(id, 1)
    }
    if (id >= 0 && id <= childrenId.value.length + 1) {
      childrenId.value.splice(id, 1)
    }
  }
  return { addChild, removeChild, childrenId }
}

export { useAddChildren }
