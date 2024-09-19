import type { UserData, ParentData, ChildData } from './types'
import { api } from '@/shared'
import { reactive } from 'vue'

const userData: UserData = reactive({ age: 0, name: '', children: [] })

const useUserData = () => {
  const setParentData = (parentData: ParentData) => {
    userData.age = parentData.age
    userData.name = parentData.name
  }

  const setChildData = (childrenData: ChildData[]) => {
    userData.children = childrenData
  }
  const removeChildData = (id: number) => {
    userData.children?.splice(id, 1)
  }

  const saveUserData = () => {
    api.saveUserDataToLocalStorage(userData)
  }
  const getUserData = () => {
    const savedData = JSON.parse(api.getUserDataFromLocalStorage())
    userData.age = savedData.age
    userData.name = savedData.name
    userData.children = savedData.children
  }
  return { setParentData, setChildData, removeChildData, saveUserData, getUserData }
}

export { userData, useUserData }
