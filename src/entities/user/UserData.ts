import type { UserData, ParentData, ChildData } from './types'
import { api } from '@/shared'
import { reactive } from 'vue'

const userData: UserData = reactive({ age: 0, name: '', children: [] })

const useUserData = () => {
  const setParentName = (parentName: string) => {
    userData.name = parentName
  }
  const setParentAge = (parentAge: number) => {
    userData.age = parentAge
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
    if (!savedData) return
    userData.age = savedData.age
    userData.name = savedData.name
    userData.children = savedData.children
  }
  return { setParentAge, setParentName, setChildData, removeChildData, saveUserData, getUserData }
}

export { userData, useUserData }
