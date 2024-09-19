interface ChildData {
  id: number
  name: string
  age: number
}

interface ParentData {
  name: string
  age: number
}

interface UserData extends ParentData {
  children?: ChildData[]
}

export type { UserData, ChildData, ParentData }
