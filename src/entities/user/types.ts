interface Child {
  name: string
  age: number
}

interface UserData {
  name: string
  age: number
  children?: Child[]
}

export type { UserData, Child }
