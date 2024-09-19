type UserDataRequest = {}

export const api = {
  saveUserDataToLocalStorage(userData: UserDataRequest) {
    localStorage.setItem('userData', JSON.stringify(userData))
  },
  deleteChildDataItem(userData: UserDataRequest) {
    localStorage.setItem('userData', JSON.stringify(userData))
  },
  getUserDataFromLocalStorage() {
    return localStorage.getItem('userData')
  }
}
