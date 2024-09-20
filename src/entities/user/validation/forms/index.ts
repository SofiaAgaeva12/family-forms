import { ValidationService } from '@/shared'

import { validateName, validateAge } from '../rules'

const rules = {
  name: validateName,
  age: validateAge
}

const errors = {
  name: 'Обязательное поле, кириллица',
  age: 'Обязательное поле, до 130'
}

export const { validateField, validate } = ValidationService.createValidator(rules, errors)
