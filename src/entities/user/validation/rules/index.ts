import { ValidationService } from '@/shared'
import type { NameData, AgeData } from '../../types'

const cyrillicDashesAndSpacesRegex = /^[-\u0400-\u04FF\s]+$/

const validateNameLength = (name: NameData) => {
  return ValidationService.inRange(name.length, 1, 1000)
}
const validateCyrillicSymbols = (name: NameData) => {
  return ValidationService.match(name, cyrillicDashesAndSpacesRegex)
}

export const validateName = ValidationService.all([validateNameLength, validateCyrillicSymbols])

export const validateAge = (age: AgeData) => {
  return ValidationService.inRange(age, 1, 130)
}
