interface Child {
  name: string
  age: number
}

interface UserChildData {
  name: string
  age: number
  children: Child[]
}

export type { UserChildData, Child }
