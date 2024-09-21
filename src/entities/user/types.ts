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
type NewValueEvent = {
  target: {
    value: number | string
  }
}
export type { UserData, ChildData, ParentData, AgeData, NameData, NewValueEvent }
