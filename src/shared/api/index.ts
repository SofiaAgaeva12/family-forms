type UserDataRequest = {}

export const api = {
  saveUserData(userData: UserDataRequest) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }
}
