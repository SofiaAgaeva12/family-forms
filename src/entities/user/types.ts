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

interface NameData {
  name: string
}

interface AgeData {
  age: number
}

export type { UserData, ChildData, ParentData, AgeData, NameData }
